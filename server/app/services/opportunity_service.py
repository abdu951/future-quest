from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from sqlalchemy import select, func
from pydantic import TypeAdapter, HttpUrl, ValidationError

from app.repositories.opportunity_repository import OpportunityRepository
from app.models.opportunity import Opportunity
from app.utils.upload import upload_image


class OpportunityService:

    @staticmethod
    async def create_opportunity(db, title, description, country, category, form_link, image):

        category = category.strip().lower()

        url_adapter = TypeAdapter(HttpUrl)

        try:
            validated_url = url_adapter.validate_python(form_link)
        except ValidationError:
            raise HTTPException(400, "Invalid form link URL")

        allowed_types = {"image/jpeg", "image/png", "image/webp"}

        if image.content_type not in allowed_types:
            raise HTTPException(400, "Invalid image type")

        image_url = upload_image(image)

        existing = await OpportunityRepository.find_duplicate(
            db, title, description
        )

        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Opportunity already exists"
            )

        opportunity = Opportunity(
            title=title,
            description=description,
            country=country,
            category=category,
            form_link=str(validated_url),
            image_url=image_url
        )

        return await OpportunityRepository.create(db, opportunity)

    @staticmethod
    async def list_opportunities(db, category):

        return await OpportunityRepository.get_all(db, category)

    @staticmethod
    async def get_opportunity(db, id):

        opportunity = await OpportunityRepository.get_by_id(db, id)

        if not opportunity:
            raise HTTPException(404, "Opportunity not found")

        return opportunity

    @staticmethod
    async def update_opportunity(db, id, title, description, country, category, form_link, image):

        opportunity = await OpportunityRepository.get_by_id(db, id)

        if not opportunity:
            raise HTTPException(404, "Opportunity not found")
        
        if category:
            category = category.strip().lower()

        url_adapter = TypeAdapter(HttpUrl)

        if form_link: 
         try:
            validated_url = url_adapter.validate_python(form_link)
         except ValidationError:
            raise HTTPException(400, "Invalid form link URL")

        allowed_types = {"image/jpeg", "image/png", "image/webp"}
        
        if image:
         if image.content_type not in allowed_types:
            raise HTTPException(400, "Invalid image type")

        existing = await OpportunityRepository.find_duplicate(
            db, title, description
        )

        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Opportunity already exists"
            )    

        if image:
            opportunity.image_url = upload_image(image)

        if title:
            opportunity.title = title

        if description:
            opportunity.description = description

        if country:
            opportunity.country = country

        if category:
            opportunity.category = category

        if form_link:
            opportunity.form_link = str(validated_url)

        return await OpportunityRepository.update(db, opportunity)

    @staticmethod
    async def delete_opportunity(db, id):

        opportunity = await OpportunityRepository.get_by_id(db, id)

        if not opportunity:
            raise HTTPException(404, "Opportunity not found")

        await OpportunityRepository.delete(db, opportunity)

        return {"success": True, "message": "Opportunity deleted"}