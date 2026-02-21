"""Domain layer: test entities. No mocks, no I/O — pure unit tests."""

import pytest

from src.domain.entities.user import User


def test_user_creation():
    user = User(id=1, username="alice", email="alice@example.com")
    assert user.id == 1
    assert user.username == "alice"
    assert user.email == "alice@example.com"


def test_user_is_frozen():
    user = User(id=1, username="alice", email="alice@example.com")
    with pytest.raises(AttributeError):
        user.username = "bob"
