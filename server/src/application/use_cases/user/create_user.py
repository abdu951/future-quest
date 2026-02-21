"""CreateUser use case: validate uniqueness and create user."""

from src.domain.entities.user import User
from src.domain.exceptions import UserAlreadyExistsError
from src.domain.repositories.user_repository import UserRepository

from src.application.use_cases.user.dto import CreateUserInput, CreateUserOutput


class CreateUserUseCase:
    """Creates a user after ensuring username and email are unique."""

    def __init__(self, user_repository: UserRepository) -> None:
        self._user_repository = user_repository

    async def execute(self, input: CreateUserInput) -> CreateUserOutput:
        existing = await self._user_repository.get_by_username(input.username)
        if existing:
            raise UserAlreadyExistsError("Username already exists")

        existing = await self._user_repository.get_by_email(input.email)
        if existing:
            raise UserAlreadyExistsError("Email already registered")

        user = await self._user_repository.create(
            username=input.username,
            email=input.email,
            password=input.password,
        )
        return CreateUserOutput(id=user.id, username=user.username, email=user.email)
