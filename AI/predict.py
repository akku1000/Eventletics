import pickle
import pandas as pd

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("encoder.pkl", "rb") as f:
    encoder = pickle.load(f)

def predict_winning_chance(input_data):
    df = pd.DataFrame([input_data])
    df[["Sex"]] = encoder.transform(df[["Sex"]])
    probability = model.predict_proba(df)[0][1]
    return round(probability * 100, 2)

if __name__ == "__main__":
    athlete = {
        "Sex": "M",
        "Age": 24,
        "Height": 190,
        "Weight": 80
    }

    your_score = predict_winning_chance(athlete)
    print("Where you stand:", your_score, "%")
    if your_score<=12 :
        print("You have good chances of winning")
    else:
        print("You need to work hard to win")
