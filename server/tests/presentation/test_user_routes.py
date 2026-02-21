"""Presentation layer: test API routes. Uses real app + real DB (or override deps)."""

import pytest
from fastapi.testclient import TestClient

from main import app


@pytest.fixture
def client():
    """TestClient uses the real app and real get_db (blog.db). For isolated tests, override get_db to use :memory:."""
    return TestClient(app)


def test_create_user_returns_201(client):
    # Use unique username so tests can run in any order
    response = client.post(
        "/api/user",
        json={
            "username": "routeuser_201",
            "email": "route201@example.com",
            "password": "password12345",
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert data["username"] == "routeuser_201"
    assert data["email"] == "route201@example.com"
    assert "id" in data


def test_create_user_duplicate_username_returns_400(client):
    client.post(
        "/api/user",
        json={
            "username": "dupuser_400",
            "email": "first400@example.com",
            "password": "password12345",
        },
    )
    response = client.post(
        "/api/user",
        json={
            "username": "dupuser_400",
            "email": "second400@example.com",
            "password": "password12345",
        },
    )
    assert response.status_code == 400
    assert "detail" in response.json()


def test_create_user_validation_error_returns_422(client):
    response = client.post(
        "/api/user",
        json={"username": "", "email": "invalid-email", "password": "short"},
    )
    assert response.status_code == 422


def test_login_success_returns_200(client):
    client.post(
        "/api/user",
        json={
            "username": "loginuser",
            "email": "login@example.com",
            "password": "mypassword123",
        },
    )
    response = client.post(
        "/api/user/login",
        json={"username": "loginuser", "password": "mypassword123"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == "loginuser"
    assert data["email"] == "login@example.com"


def test_login_invalid_credentials_returns_401(client):
    response = client.post(
        "/api/user/login",
        json={"username": "nobody", "password": "wrong"},
    )
    assert response.status_code == 401
    assert "detail" in response.json()
