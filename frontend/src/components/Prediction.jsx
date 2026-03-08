import React, { useState } from 'react'
import { IoMdTrendingUp } from "react-icons/io";
const Prediction = ({user}) => {

    const[formData,setFormData]=useState({
       name:user.name||user.username,
       time:"",
    })
    const[prediction,setPrediction]=useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault();
    const randomChance = Math.floor(Math.random() * 40) + 60; 
    setPrediction({
      chance: randomChance,
      name: formData.name,
      time: formData.time
    });
    }

  return (
    <div>
         <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <TrendingUp className="w-16 h-16 text-green-600" /> */}
            <IoMdTrendingUp className="w-16 h-16 text-green-300"/>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">Winning Prediction</h1>
          <p className="text-lg ">Enter your details to predict your winning chances</p>
        </div>

         <div className='bg-gray-900 py-8 border  border-emerald-400 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label htmlFor="name"  className="block text-sm font-medium text-gray-300">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                data-testid="prediction-name-input"
               className=" block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="time"  className="block text-sm font-medium text-gray-300">Event Time</label>
              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required
                data-testid="prediction-time-input"
               className=" block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>

             <button 
              type="submit" 
              className="w-full h-14 bg-green-400 hover:bg-green-700 text-white font-semibold text-lg btn-hover"
              data-testid="prediction-submit-button"
            >
               {/* <IoMdTrendingUp className="w-16 h-16 text-green-300"/> */}
              Calculate Winning Chances
            </button>
         </form>
         </div>

         {prediction && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Your Prediction Result</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
              <p className="text-sm mb-2 opacity-90">Name: {prediction.name}</p>
              <p className="text-sm mb-4 opacity-90">Time: {prediction.time}</p>
              <div className="text-7xl font-bold mb-2">{prediction.chance}%</div>
              <p className="text-xl font-semibold">Winning Chance</p>
            </div>
            <p className="text-lg opacity-90">
              {prediction.chance >= 80 ? 'Excellent! You have a very high chance of winning!' :
               prediction.chance >= 70 ? 'Great! Your chances look promising!' :
               'Good! Keep training to improve your chances!'}
            </p>
          </div>
        )}
    </div>
 </div>
  )
}

export default Prediction