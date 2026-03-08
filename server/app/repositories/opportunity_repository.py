from sqlalchemy import select, func
from app.models.opportunity import Opportunity


class OpportunityRepository:

    @staticmethod
    async def create(db, opportunity):
        db.add(opportunity)
        await db.commit()
        await db.refresh(opportunity)
        return opportunity

    @staticmethod
    async def get_all(db, category=None):

        query = select(Opportunity)

        if category:
            query = query.where(Opportunity.category == category)

        result = await db.execute(query.order_by(Opportunity.date_posted.desc()))
        return result.scalars().all()

    @staticmethod
    async def get_by_id(db, id):

        result = await db.execute(
            select(Opportunity).where(Opportunity.id == id)
        )
        return result.scalar_one_or_none()

    @staticmethod
    async def delete(db, opportunity):

        await db.delete(opportunity)
        await db.commit()

    @staticmethod
    async def update(db, opportunity):

        await db.commit()
        await db.refresh(opportunity)
        return opportunity

    @staticmethod
    async def find_duplicate(db, title, description):

        stmt = select(Opportunity).where(
            func.lower(func.trim(Opportunity.title)) == title.strip().lower(),
            func.lower(func.trim(Opportunity.description)) == description.strip().lower()
        )

        result = await db.execute(stmt)
        return result.scalars().first()


    @staticmethod
    async def find_duplicate_by_id(db, id, title, description):

        stmt = select(Opportunity.id).where(
            func.lower(func.trim(Opportunity.title)) == title.strip().lower(),
            func.lower(func.trim(Opportunity.description)) == description.strip().lower(),
            Opportunity.id != id
        )

        result = await db.execute(stmt)
        return result.scalars().first() 