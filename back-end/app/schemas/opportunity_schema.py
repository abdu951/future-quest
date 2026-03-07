from pydantic import BaseModel, HttpUrl


class OpportunityResponse(BaseModel):
    id: int
    title: str
    description: str
    country: str
    category: str
    image_url: HttpUrl
    form_link: HttpUrl

    class Config:
        from_attributes = True
