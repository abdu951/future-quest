"""Domain exceptions. Use cases raise these; presentation maps to HTTP."""


class UserAlreadyExistsError(Exception):
    """Raised when username or email is already registered."""

    def __init__(self, message: str = "Username or email already exists") -> None:
        self.message = message
        super().__init__(self.message)


class InvalidCredentialsError(Exception):
    """Raised when login username or password is wrong."""

    def __init__(self, message: str = "Invalid username or password") -> None:
        self.message = message
        super().__init__(self.message)
