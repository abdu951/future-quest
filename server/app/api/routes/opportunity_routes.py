from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional

from database import get_db
from app.services.opportunity_service import OpportunityService

router = APIRouter(prefix="/api/opportunities", tags=["Opportunities"])


@router.post("/")
async def create_opportunity(
    title: str = Form(...),
    description: str = Form(...),
    country: str = Form(...),
    category: str = Form(...),
    form_link: str = Form(...),
    image: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    return await OpportunityService.create_opportunity(
        db, title, description, country, category, form_link, image
    )


@router.get("/")
async def list_opportunities(
    category: Optional[str] = None,
    db: AsyncSession = Depends(get_db)
):
    return await OpportunityService.list_opportunities(db, category)


@router.get("/{id}")
async def get_opportunity(id: int, db: AsyncSession = Depends(get_db)):
    return await OpportunityService.get_opportunity(db, id)


@router.patch("/{id}")
async def update_opportunity(
    id: int,
    title: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    country: Optional[str] = Form(None),
    category: Optional[str] = Form(None),
    form_link: Optional[str] = Form(None),
    image: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db)
):
    return await OpportunityService.update_opportunity(
        db, id, title, description, country, category, form_link, image
    )


@router.delete("/{id}")
async def delete_opportunity(id: int, db: AsyncSession = Depends(get_db)):
    return await OpportunityService.delete_opportunity(db, id)