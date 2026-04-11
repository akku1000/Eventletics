import os
import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OrdinalEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "Swimming Dataset.csv")

df = pd.read_csv(DATA_PATH)

df["Winner"] = df["Medal"].notnull().astype(int)

df = df[["Sex", "Age", "Height", "Weight", "Winner"]]

encoder = OrdinalEncoder(handle_unknown="use_encoded_value", unknown_value=-1)
df[["Sex"]] = encoder.fit_transform(df[["Sex"]])

X = df.drop("Winner", axis=1)
y = df["Winner"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = RandomForestClassifier(
    n_estimators=300,
    max_depth=12,
    class_weight="balanced",
    random_state=42
)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"Accuracy: {accuracy * 100:.2f}%")
print("\nClassification Report:\n", classification_report(y_test, y_pred))

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("encoder.pkl", "wb") as f:
    pickle.dump(encoder, f)

print("\nModel and encoder saved successfully.")
