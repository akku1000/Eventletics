import React, { useState } from "react";
import axios from "axios";
import { userstore } from "../stores/userstores";
const Prediction = () => {
  const { predict } = userstore();
  const [formData, setFormData] = useState({
    sex: "M",
    age: "",
    height: "",
    weight: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await predict(formData);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-400">
        Winning Predictor
      </h2>

      <div className="bg-gray-900 py-8 border border-emerald-400 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        
        <form onSubmit={handelSubmit} className="space-y-6">

          {/* Sex Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Sex
            </label>
            <select
              value={formData.sex}
              onChange={(e) =>
                setFormData({ ...formData, sex: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-emerald-500"
              placeholder="Enter age"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Height (cm)
            </label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) =>
                setFormData({ ...formData, height: e.target.value })
              }
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-emerald-500"
              placeholder="Enter height"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Weight (kg)
            </label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-emerald-500"
              placeholder="Enter weight"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center text-white">
            <h3 className="text-xl font-bold text-emerald-400">
              {result.winning_probability}%
            </h3>
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prediction;