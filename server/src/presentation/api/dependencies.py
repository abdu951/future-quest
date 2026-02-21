"""FastAPI dependencies: session, repository, use cases."""

from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from src.application.use_cases.user import CreateUserUseCase, LoginUseCase
from src.application.use_cases.user.dto import CreateUserInput
from src.domain.repositories.user_repository import UserRepository
from src.infrastructure.database import get_db
from src.infrastructure.persistence.repositories.user_repository import (
    SqlAlchemyUserRepository,
)


async def get_user_repository(
    session: Annotated[AsyncSession, Depends(get_db)],
) -> UserRepository:
    return SqlAlchemyUserRepository(session)


async def get_create_user_use_case(
    repo: Annotated[UserRepository, Depends(get_user_repository)],
) -> CreateUserUseCase:
    return CreateUserUseCase(user_repository=repo)


async def get_login_use_case(
    repo: Annotated[UserRepository, Depends(get_user_repository)],
) -> LoginUseCase:
    return LoginUseCase(user_repository=repo)
