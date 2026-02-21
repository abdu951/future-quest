"""Application layer: test LoginUseCase with fake repository."""

import pytest

from src.application.use_cases.user import LoginUseCase
from src.application.use_cases.user.dto import LoginInput
from src.domain.entities.user import User
from src.domain.exceptions import InvalidCredentialsError
from src.domain.repositories.user_repository import UserRepository


class FakeUserRepository(UserRepository):
    def __init__(self):
        self._users: list[User] = []
        self._passwords: dict[str, str] = {}

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
        if user is None or self._passwords.get(username) != password:
            return None
        return user


@pytest.fixture
def fake_repo():
    return FakeUserRepository()


@pytest.fixture
def use_case(fake_repo):
    return LoginUseCase(user_repository=fake_repo)


@pytest.mark.asyncio
async def test_login_success(use_case, fake_repo):
    await fake_repo.create("alice", "alice@example.com", "secret123")
    result = await use_case.execute(LoginInput(username="alice", password="secret123"))
    assert result.id == 1
    assert result.username == "alice"
    assert result.email == "alice@example.com"


@pytest.mark.asyncio
async def test_login_wrong_password_raises(use_case, fake_repo):
    await fake_repo.create("alice", "alice@example.com", "secret123")
    with pytest.raises(InvalidCredentialsError) as exc_info:
        await use_case.execute(LoginInput(username="alice", password="wrong"))
    assert "Invalid username or password" in exc_info.value.message


@pytest.mark.asyncio
async def test_login_unknown_user_raises(use_case):
    with pytest.raises(InvalidCredentialsError):
        await use_case.execute(LoginInput(username="nobody", password="any"))
