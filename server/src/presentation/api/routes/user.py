"""User API routes. Thin controller: parse request, call use case, return response."""

from typing import Annotated

from fastapi import APIRouter, Depends, status

from src.application.use_cases.user import CreateUserUseCase, LoginUseCase
from src.application.use_cases.user.dto import CreateUserInput, LoginInput
from src.presentation.api.dependencies import get_create_user_use_case, get_login_use_case
from src.presentation.schemas.user import LoginRequest, UserCreate, UserResponse

router = APIRouter()


@router.post(
    "",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(
    body: UserCreate,
    use_case: Annotated[CreateUserUseCase, Depends(get_create_user_use_case)],
) -> UserResponse:
    result = await use_case.execute(
        CreateUserInput(
            username=body.username,
            email=body.email,
            password=body.password,
        ),
    )
    return UserResponse(id=result.id, username=result.username, email=result.email)


@router.post(
    "/login",
    response_model=UserResponse,
    status_code=status.HTTP_200_OK,
)
async def login(
    body: LoginRequest,
    use_case: Annotated[LoginUseCase, Depends(get_login_use_case)],
) -> UserResponse:
    result = await use_case.execute(
        LoginInput(username=body.username, password=body.password),
    )
    return UserResponse(id=result.id, username=result.username, email=result.email)
