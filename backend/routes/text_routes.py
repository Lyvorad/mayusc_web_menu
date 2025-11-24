from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services import text_service

router = APIRouter()

class TextRequest(BaseModel):
    text: str

class CorrectionRequest(BaseModel):
    text: str

@router.get("/health")
async def health_check():
    return {"status": "healthy"}

@router.post("/uppercase")
async def to_uppercase(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="Text field is required")
    return {"result": text_service.to_uppercase(request.text)}

@router.post("/lowercase")
async def to_lowercase(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="Text field is required")
    return {"result": text_service.to_lowercase(request.text)}

@router.post("/correct")
async def correct_text(request: CorrectionRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="Text field is required")
    
    try:
        corrected_text = await text_service.correct_with_ai(request.text)
        return {"result": corrected_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Correction service error: {str(e)}")