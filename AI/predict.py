import joblib
import pandas as pd

def generate_pro_report_lr(prob, input_data, df_clean, model, scaler, le):
    winners = df_clean[df_clean['Medal'] == 1]
    pro_benchmarks = winners[winners['Sex'] == input_data['Sex'].values[0]]

    avg_winner_time = pro_benchmarks['BestTime_100m'].mean()
    avg_winner_hours = pro_benchmarks['training_hours_per_week'].mean()

    athlete_time = input_data['BestTime_100m'].values[0]
    athlete_hours = input_data['training_hours_per_week'].values[0]

    sim_data = input_data.copy()
    sim_data['training_hours_per_week'] += 5

    sim_data_encoded = sim_data.copy()
    sim_data_encoded['Sex'] = le.transform(sim_data_encoded['Sex'])
    sim_scaled = scaler.transform(sim_data_encoded)

    sim_prob = model.predict_proba(sim_scaled)[0][1] * 100
    prob_gain = max(0, sim_prob - prob)

    advice = []

    if athlete_time > avg_winner_time:
        diff = athlete_time - avg_winner_time
        advice.append(f"SPEED: You are {diff:.2f}s slower than average ({avg_winner_time:.2f}s).")
    else:
        advice.append("SPEED: You are at elite pace.")

    if athlete_hours < avg_winner_hours:
        advice.append(f"TRAINING: Increase weekly hours (avg: {avg_winner_hours:.1f}). Gain ≈ +{prob_gain:.1f}%")

    athlete_consist = input_data['AverageTime_100m'].values[0] - athlete_time
    if athlete_consist > 1.5:
        advice.append("CONSISTENCY: Improve endurance for stable performance.")

    return advice


# 🔥 ONLY FOR LOCAL TESTING
if __name__ == "__main__":
    model = joblib.load('lr_model.pkl')
    scaler = joblib.load('lr_scaler.pkl')
    le = joblib.load('label_encoder.pkl')
    df_clean = pd.read_csv('Swimming_Dataset_Clean.csv')

    user_input = ['M', 22, 190, 85, 49.5, 51.5, 20]

    cols = [
        'Sex', 'Age', 'Height', 'Weight',
        'BestTime_100m', 'AverageTime_100m',
        'training_hours_per_week'
    ]

    df = pd.DataFrame([user_input], columns=cols)

    df_encoded = df.copy()
    df_encoded['Sex'] = le.transform(df_encoded['Sex'])
    df_scaled = scaler.transform(df_encoded)

    prob = model.predict_proba(df_scaled)[0][1] * 100

    report = generate_pro_report_lr(prob, df, df_clean, model, scaler, le)

    print("\n--- MODEL REPORT ---")
    print(f"Winning Probability: {prob:.2f}%")
    for r in report:
        print("-", r)