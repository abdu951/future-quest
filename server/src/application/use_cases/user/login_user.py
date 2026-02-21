"""Login use case: verify credentials and return user."""

from src.domain.exceptions import InvalidCredentialsError
from src.domain.repositories.user_repository import UserRepository

from src.application.use_cases.user.dto import LoginInput, LoginOutput


class LoginUseCase:
    """Verifies username/password and returns the user if valid."""

    def __init__(self, user_repository: UserRepository) -> None:
        self._user_repository = user_repository

    async def execute(self, input: LoginInput) -> LoginOutput:
        user = await self._user_repository.verify_credentials(
            username=input.username,
            password=input.password,
        )
        if user is None:
            raise InvalidCredentialsError("Invalid username or password")
        return LoginOutput(id=user.id, username=user.username, email=user.email)
