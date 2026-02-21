# How to test each layer

Run all tests from project root (`server/`):

```bash
uv run pytest tests/ -v
```

Run by layer:

```bash
uv run pytest tests/domain/ -v
uv run pytest tests/application/ -v
uv run pytest tests/infrastructure/ -v
uv run pytest tests/presentation/ -v
```

---

## Domain layer (`tests/domain/`)

**Goal:** Test entities and domain rules in isolation. No mocks, no I/O.

- **What to test:** Entity creation, invariants, domain exceptions.
- **How:** Plain unit tests. Import domain classes and assert.
- **Example:** `test_entities_user.py`, `test_exceptions.py`.

---

## Application layer (`tests/application/`)

**Goal:** Test use cases with a **fake** implementation of the repository. No real DB.

- **What to test:** Use case flow: success path, validation, domain errors.
- **How:** Implement a small in-memory `FakeUserRepository` that satisfies the port. Inject it into the use case. Assert on return values and raised exceptions.
- **Example:** `test_create_user_use_case.py` uses `FakeUserRepository` and tests create, duplicate username, duplicate email.

---

## Infrastructure layer (`tests/infrastructure/`)

**Goal:** Test that the real repository works against a real database.

- **What to test:** Repository methods (create, get_by_username, get_by_email) and mapping to domain entities.
- **How:** Use **in-memory SQLite** (`:memory:`) so tests are fast and don’t touch `blog.db`. Create tables with the same `Base`, then run repository methods.
- **Example:** `test_user_repository.py`.

---

## Presentation layer (`tests/presentation/`)

**Goal:** Test HTTP routes: status codes, response shape, validation.

- **What to test:** Endpoints with valid/invalid payloads, duplicate handling, 422 for bad input.
- **How:** Use FastAPI’s `TestClient` against the real app. Optionally override `get_db` to use an in-memory DB for isolation (avoids shared `blog.db` and aiosqlite issues on some setups).
- **Example:** `test_user_routes.py`.

---

## Summary

| Layer          | Test with                    | DB / I/O        |
|----------------|------------------------------|-----------------|
| Domain         | Plain unit tests             | None            |
| Application    | Use case + fake repository   | None            |
| Infrastructure | Real repository + in-memory DB| In-memory SQLite|
| Presentation   | TestClient + app              | Real or overridden |
