from app.core.config import settings
from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.opportunity_routes import router as opportunity_router


@asynccontextmanager
async def lifespan(_app: FastAPI):
    # Startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5174",
        "http://localhost:5173",
        "https://future-quest-j9fw.vercel.app",
        "https://future-quest-admin.vercel.app",
        "https://future-quest-7hk4.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(opportunity_router)