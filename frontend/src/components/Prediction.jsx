import React, { useState } from "react";
import { userstore } from "../stores/userstores";

const Prediction = () => {
  const { predict } = userstore();

  const [formData, setFormData] = useState({
    sex: "M",
    age: "",
    height: "",
    weight: "",
    bestTime: "",
    avgTime: "",
    hours: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await predict(formData);
      setResult(res);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <h2 className="text-center text-3xl font-extrabold text-emerald-400">
        Winning Predictor
      </h2>

      <div className="bg-gray-900 py-8 border border-emerald-400 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        
        <form onSubmit={handelSubmit} className="space-y-6">

          {/* Sex */}
          <select
            value={formData.sex}
            onChange={(e)=>setFormData({...formData, sex:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          {/* Inputs */}
          <input placeholder="Age"
            onChange={(e)=>setFormData({...formData, age:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          <input placeholder="Height"
            onChange={(e)=>setFormData({...formData, height:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          <input placeholder="Weight"
            onChange={(e)=>setFormData({...formData, weight:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          <input placeholder="Best Time (100m)"
            onChange={(e)=>setFormData({...formData, bestTime:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          <input placeholder="Average Time (100m)"
            onChange={(e)=>setFormData({...formData, avgTime:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          <input placeholder="Training Hours / Week"
            onChange={(e)=>setFormData({...formData, hours:e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-600 text-white rounded-md"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {/* RESULT */}
        {result && (
          <div className="mt-6 text-white">
            
            <h3 className="text-xl font-bold gap-2 text-emerald-400 text-center">
              <span className="text-white">Winning Probability</span>:
              {result.winning_probability}%
            </h3>

            <div className="mt-4 space-y-2">
              <span className="text-emerald-400 font-bold">Advice:</span>
              {result.report.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Prediction;