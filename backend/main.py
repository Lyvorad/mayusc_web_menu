from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os


app = FastAPI(
    
    title="Mi API Profesional",
    description="API base para proyecto desplegado en Render",
    version="1.0.0"
)


# CORS — ajusta allow_origins a tu dominio en producción
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SaludoRequest(BaseModel):
    nombre: str = "usuario"


@app.get("/")
async def root():
    return {"mensaje": "API activa y funcionando"}


@app.get("/api/saludo")
async def saludo(nombre: str = "usuario"):
    return {"saludo": f"Hola {nombre}, tu API funciona correctamente."}


@app.post("/api/saludo")
async def saludo_post(req: SaludoRequest):
    if not req.nombre:
        raise HTTPException(status_code=400, detail="Campo 'nombre' requerido")
    return {"saludo": f"Hola {req.nombre}, (POST) tu API funciona correctamente."}