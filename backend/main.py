from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routes import text_routes

app = FastAPI(
    title="Text Tools API",
    description="API for text transformation and correction",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(text_routes.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Text Tools API is running"}