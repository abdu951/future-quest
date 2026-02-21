"""Shared pytest config: asyncio mode, and fixtures used across layers."""

import pytest

pytest_plugins = ["pytest_asyncio"]

# Run all async tests without needing @pytest.mark.asyncio on each (pytest-asyncio 0.24+)
def pytest_configure(config):
    config.addinivalue_line("markers", "asyncio: mark test as async (pytest-asyncio).")
