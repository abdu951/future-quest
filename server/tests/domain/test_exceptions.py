"""Domain layer: test domain exceptions."""

from src.domain.exceptions import UserAlreadyExistsError


def test_user_already_exists_error_default_message():
    exc = UserAlreadyExistsError()
    assert exc.message == "Username or email already exists"
    assert str(exc) == "Username or email already exists"


def test_user_already_exists_error_custom_message():
    exc = UserAlreadyExistsError("Username already exists")
    assert exc.message == "Username already exists"
