from sqlalchemy import Integer, String, Text, DateTime
from datetime import datetime, UTC   
from database import Base
from sqlalchemy.orm import Mapped, mapped_column

class Opportunity(Base):
    __tablename__ = "opportunities"


    id : Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title : Mapped[str] = mapped_column(String(255), nullable=False)
    description : Mapped[str] = mapped_column(Text, nullable=False)
    country : Mapped[str] = mapped_column(String(100), nullable=False)
    category : Mapped[str] = mapped_column(String(100), nullable=False)
    image_url : Mapped[str] = mapped_column(String(500), nullable=False)
    form_link : Mapped[str] = mapped_column(String(500), nullable=False)
    date_posted: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
    )
