"""Composition root: wire DB, register routes and exception handlers."""

from contextlib import asynccontextmanager

from fastapi import FastAPI

from src.domain.exceptions import InvalidCredentialsError, UserAlreadyExistsError
from src.infrastructure.database import Base, engine
from src.infrastructure.persistence.models import UserModel  # noqa: F401 - register with Base
from src.presentation.api.exception_handlers import (
    invalid_credentials_handler,
    user_already_exists_handler,
)
from src.presentation.api.routes import user_router


@asynccontextmanager
async def lifespan(_app: FastAPI):
    # Startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()


app = FastAPI(lifespan=lifespan)

app.add_exception_handler(UserAlreadyExistsError, user_already_exists_handler)
app.add_exception_handler(InvalidCredentialsError, invalid_credentials_handler)

app.include_router(user_router, prefix="/api/user", tags=["user"])
