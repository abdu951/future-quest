"""Infrastructure layer: test real repository against a real DB (in-memory SQLite)."""

import pytest
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker

from src.domain.entities.user import User
from src.infrastructure.database import Base
from src.infrastructure.persistence.models.user import UserModel
from src.infrastructure.persistence.repositories.user_repository import (
    SqlAlchemyUserRepository,
)


# In-memory DB for tests — no file, fast, isolated per test run
TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"


@pytest.fixture
async def async_engine():
    engine = create_async_engine(
        TEST_DATABASE_URL,
        connect_args={"check_same_thread": False},
    )
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield engine
    await engine.dispose()


@pytest.fixture
async def session(async_engine):
    session_factory = async_sessionmaker(
        async_engine,
        class_=AsyncSession,
        expire_on_commit=False,
    )
    async with session_factory() as s:
        yield s


@pytest.fixture
def repo(session):
    return SqlAlchemyUserRepository(session)


@pytest.mark.asyncio
async def test_create_and_get_by_username(repo):
    user = await repo.create("alice", "alice@example.com", "password123")
    assert user.id >= 1
    assert user.username == "alice"
    assert user.email == "alice@example.com"

    found = await repo.get_by_username("alice")
    assert found is not None
    assert found.username == "alice"


@pytest.mark.asyncio
async def test_get_by_username_not_found(repo):
    assert await repo.get_by_username("nobody") is None


@pytest.mark.asyncio
async def test_get_by_email(repo):
    await repo.create("alice", "alice@example.com", "password123")
    found = await repo.get_by_email("alice@example.com")
    assert found is not None
    assert found.email == "alice@example.com"


@pytest.mark.asyncio
async def test_get_by_email_not_found(repo):
    assert await repo.get_by_email("nobody@example.com") is None


@pytest.mark.asyncio
async def test_verify_credentials_success(repo):
    await repo.create("alice", "alice@example.com", "secret456")
    user = await repo.verify_credentials("alice", "secret456")
    assert user is not None
    assert user.username == "alice"


@pytest.mark.asyncio
async def test_verify_credentials_wrong_password_returns_none(repo):
    await repo.create("alice", "alice@example.com", "secret456")
    assert await repo.verify_credentials("alice", "wrong") is None


@pytest.mark.asyncio
async def test_verify_credentials_unknown_user_returns_none(repo):
    assert await repo.verify_credentials("nobody", "any") is None
