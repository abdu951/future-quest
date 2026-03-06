from cloudinary.uploader import upload
from fastapi import UploadFile, HTTPException



def upload_image(file: UploadFile) -> str:

    if not file.content_type.startswith("image/"):
        raise HTTPException(400, "Invalid image type")

    result = upload(
        file.file,
        resource_type="image"
    )

    return result["secure_url"]