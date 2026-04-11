from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd
import os

app = FastAPI()

BASE_DIR = os.path.dirname(__file__)

with open(os.path.join(BASE_DIR, "model.pkl"), "rb") as f:
    model = pickle.load(f)

with open(os.path.join(BASE_DIR, "encoder.pkl"), "rb") as f:
    encoder = pickle.load(f)

class Athlete(BaseModel):
    Sex: str
    Age: int
    Height: float
    Weight: float

@app.post("/predict")
def predict(data: Athlete):
    df = pd.DataFrame([data.dict()])
    df = df[["Sex", "Age", "Height", "Weight"]]

    df[["Sex"]] = encoder.transform(df[["Sex"]])

    prob = model.predict_proba(df)[0][1]

    if prob > 0.7:
        msg = "High chances"
    elif prob > 0.4:
        msg = "Moderate chances"
    else:
        msg = "Low chances"

    return {
        "winning_probability": round(prob * 100, 2),
        "message": msg
    }