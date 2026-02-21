"""Domain User entity. No framework dependencies."""

from dataclasses import dataclass


@dataclass(frozen=True)
class User:
    id: int
    username: str
    email: str
