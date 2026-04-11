const predict = async (req, res) => {
  try {
    const { sex, age, height, weight } = req.body;

    const result = await axios.post("http://localhost:8000/predict", {
      Sex: sex,
      Age: Number(age),
      Height: Number(height),
      Weight: Number(weight)
    });

    res.json(result.data);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error occurred while predicting" });
  }
};

export { predict };