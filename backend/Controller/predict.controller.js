import axios from "axios";
const predict = async (req, res) => {
  try {
    const { sex, age, height, weight } = req.body;

    const result = await axios.post("https://eventletics.onrender.com/predict", {
      Sex: sex,
      Age: Number(age),
      Height: Number(height),
      Weight: Number(weight)
    });

    res.json(result.data);

  } catch (error) {

    res.status(500).json({ message: "Error making prediction", error: error.message });
  }
};

export { predict };