from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import os

from predict import generate_pro_report_lr

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, "lr_model.pkl"))
scaler = joblib.load(os.path.join(BASE_DIR, "lr_scaler.pkl"))
le = joblib.load(os.path.join(BASE_DIR, "label_encoder.pkl"))
df_clean = pd.read_csv(os.path.join(BASE_DIR, "Swimming_Dataset_Clean.csv"))

class Athlete(BaseModel):
    Sex: str
    Age: int
    Height: float
    Weight: float
    BestTime_100m: float
    AverageTime_100m: float
    training_hours_per_week: float

@app.get("/")
def home():
    return {"message": "AI Model Running 🚀"}

@app.post("/predict")
def predict(data: Athlete):
    df = pd.DataFrame([data.dict()])

    df["Sex"] = le.transform(df["Sex"])
    df_scaled = scaler.transform(df)

    prob = model.predict_proba(df_scaled)[0][1] * 100

    report = generate_pro_report_lr(prob, pd.DataFrame([data.dict()]), df_clean, model, scaler, le)

    return {
        "winning_probability": round(prob, 2),
        "report": report
    }