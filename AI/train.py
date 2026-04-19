import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, roc_auc_score
import joblib

df = pd.read_csv('Swimming_Dataset_Clean.csv')

data = df.drop(columns=['ID', 'Name'])

le = LabelEncoder()
data['Sex'] = le.fit_transform(data['Sex'])

X = data.drop(columns=['Medal'])
y = data['Medal']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LogisticRegression(max_iter=1000)
model.fit(X_train_scaled, y_train)

y_pred = model.predict(X_test_scaled)
y_prob = model.predict_proba(X_test_scaled)[:, 1]

print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.4f}")

joblib.dump(model, 'lr_model.pkl')
joblib.dump(scaler, 'lr_scaler.pkl')
joblib.dump(le, 'label_encoder.pkl')

print("Model, scaler, encoder saved successfully 🚀")