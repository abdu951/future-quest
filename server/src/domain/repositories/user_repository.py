"""Port: abstract user repository. Implemented by infrastructure."""

from abc import ABC, abstractmethod

from src.domain.entities.user import User


class UserRepository(ABC):
    """Abstract interface for user persistence."""

    @abstractmethod
    async def get_by_username(self, username: str) -> User | None:
        """Return user with given username or None."""
        ...

    @abstractmethod
    async def get_by_email(self, email: str) -> User | None:
        """Return user with given email or None."""
        ...

    @abstractmethod
    async def create(self, username: str, email: str, password: str) -> User:
        """Create and persist a user. Returns the created domain User."""
        ...

    @abstractmethod
    async def verify_credentials(self, username: str, password: str) -> User | None:
        """Verify username and password; return User if valid, else None."""
        ...
