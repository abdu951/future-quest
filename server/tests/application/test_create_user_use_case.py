"""Application layer: test use cases with a FAKE repository. No real DB."""

import pytest

from src.application.use_cases.user import CreateUserUseCase
from src.application.use_cases.user.dto import CreateUserInput
from src.domain.entities.user import User
from src.domain.exceptions import UserAlreadyExistsError
from src.domain.repositories.user_repository import UserRepository


class FakeUserRepository(UserRepository):
    """In-memory fake for testing. Use case doesn't know it's not the real DB."""

    def __init__(self):
        self._users: list[User] = []
        self._passwords: dict[str, str] = {}  # username -> password

    async def get_by_username(self, username: str) -> User | None:
        for u in self._users:
            if u.username == username:
                return u
        return None

    async def get_by_email(self, email: str) -> User | None:
        for u in self._users:
            if u.email == email:
                return u
        return None

    async def create(self, username: str, email: str, password: str) -> User:
        user = User(id=len(self._users) + 1, username=username, email=email)
        self._users.append(user)
        self._passwords[username] = password
        return user

    async def verify_credentials(self, username: str, password: str) -> User | None:
        user = await self.get_by_username(username)
        if user is None:
            return None
        if self._passwords.get(username) != password:
            return None
        return user


@pytest.fixture
def fake_repo():
    return FakeUserRepository()


@pytest.fixture
def use_case(fake_repo):
    return CreateUserUseCase(user_repository=fake_repo)


@pytest.mark.asyncio
async def test_create_user_success(use_case, fake_repo):
    result = await use_case.execute(
        CreateUserInput(
            username="alice",
            email="alice@example.com",
            password="password123",
        ),
    )
    assert result.id == 1
    assert result.username == "alice"
    assert result.email == "alice@example.com"
    assert await fake_repo.get_by_username("alice") is not None


@pytest.mark.asyncio
async def test_create_user_duplicate_username_raises(use_case, fake_repo):
    await fake_repo.create("alice", "alice@example.com", "pass123")
    with pytest.raises(UserAlreadyExistsError) as exc_info:
        await use_case.execute(
            CreateUserInput(
                username="alice",
                email="other@example.com",
                password="otherpass",
            ),
        )
    assert "Username already exists" in exc_info.value.message


@pytest.mark.asyncio
async def test_create_user_duplicate_email_raises(use_case, fake_repo):
    await fake_repo.create("alice", "alice@example.com", "pass123")
    with pytest.raises(UserAlreadyExistsError) as exc_info:
        await use_case.execute(
            CreateUserInput(
                username="bob",
                email="alice@example.com",
                password="bobpass",
            ),
        )
    assert "Email already registered" in exc_info.value.message
