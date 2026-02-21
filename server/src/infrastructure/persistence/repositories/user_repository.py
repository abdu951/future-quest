"""UserRepository implementation using SQLAlchemy."""

import bcrypt
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.domain.entities.user import User
from src.domain.repositories.user_repository import UserRepository

from src.infrastructure.persistence.models.user import UserModel


def _hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("ascii")


def _verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("ascii"))


class SqlAlchemyUserRepository(UserRepository):
    """Implements UserRepository using SQLAlchemy async session."""

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    async def get_by_username(self, username: str) -> User | None:
        result = await self._session.execute(
            select(UserModel).where(UserModel.username == username),
        )
        model = result.scalars().first()
        return self._to_domain(model) if model else None

    async def get_by_email(self, email: str) -> User | None:
        result = await self._session.execute(
            select(UserModel).where(UserModel.email == email),
        )
        model = result.scalars().first()
        return self._to_domain(model) if model else None

    async def create(self, username: str, email: str, password: str) -> User:
        model = UserModel(
            username=username,
            email=email,
            password_hash=_hash_password(password),
        )
        self._session.add(model)
        await self._session.commit()
        await self._session.refresh(model)
        return self._to_domain(model)

    async def verify_credentials(self, username: str, password: str) -> User | None:
        result = await self._session.execute(
            select(UserModel).where(UserModel.username == username),
        )
        model = result.scalars().first()
        if model is None or model.password_hash is None:
            return None
        if not _verify_password(password, model.password_hash):
            return None
        return self._to_domain(model)

    @staticmethod
    def _to_domain(model: UserModel) -> User:
        return User(id=model.id, username=model.username, email=model.email)
