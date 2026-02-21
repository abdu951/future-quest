"""DTOs for user use cases."""

from dataclasses import dataclass


@dataclass(frozen=True)
class CreateUserInput:
    username: str
    email: str
    password: str


@dataclass(frozen=True)
class CreateUserOutput:
    """Output of CreateUserUseCase; holds the created domain User."""

    id: int
    username: str
    email: str


@dataclass(frozen=True)
class LoginInput:
    username: str
    password: str


@dataclass(frozen=True)
class LoginOutput:
    """Output of LoginUseCase; holds the authenticated user."""

    id: int
    username: str
    email: str
