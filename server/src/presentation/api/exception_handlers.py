"""Map domain/application exceptions to HTTP responses."""

from fastapi import Request, status
from fastapi.responses import JSONResponse

from src.domain.exceptions import InvalidCredentialsError, UserAlreadyExistsError


async def user_already_exists_handler(
    _request: Request,
    exc: UserAlreadyExistsError,
) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"detail": exc.message},
    )


async def invalid_credentials_handler(
    _request: Request,
    exc: InvalidCredentialsError,
) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_401_UNAUTHORIZED,
        content={"detail": exc.message},
    )
