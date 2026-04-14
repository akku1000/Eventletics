import React from 'react'
import { FiUsers } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoTrendingUp } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";

const HomePage = () => {
  return (
    <div className='min-h-screen bg-white text-gray-900'>

      <div className='max-w-7xl mx-auto px-6 py-16 text-center'>
        
        {/* Heading */}
        <h1 className='text-5xl sm:text-6xl font-bold text-emerald-600 mb-6'>
          Compete.Win.
          <span className="block">Dominate Events.</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Join competitive events, predict your winning chances, and become a champion. 
          The ultimate platform for event organizers and competitors.
        </p>

        {/* Features Section */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
                Everything You Need to Win
              </h2>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Powerful features designed for both competitors and event organizers
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  <FaRegCalendarCheck />
                </div>
                <h3 className="text-xl font-bold mb-3">One-Tap Register</h3>
                <p className="text-black leading-relaxed">
                  Register for events instantly with a single tap. No complex forms, just your name and you're in.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  <IoTrendingUp />
                </div>
                <h3 className="text-xl font-bold mb-3">Win Prediction</h3>
                <p className="text-black leading-relaxed">
                  Get AI-powered predictions of your winning chances based on your profile and event timing.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  <IoMdTrophy />
                </div>
                <h3 className="text-xl font-bold mb-3">Competitive Events</h3>
                <p className="text-black leading-relaxed">
                  Browse and join competitive events across multiple categories. Find your perfect challenge.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  <FiUsers />
                </div>
                <h3 className="text-xl font-bold mb-3">Event Management</h3>
                <p className="text-black leading-relaxed">
                  Organizers can create and manage events with detailed information and track registrations.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default HomePage