import React from 'react'
import { FiUsers } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoTrendingUp } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
const HomePage = () => {
  return (
    <div className='relative min-h-screen text-white overflow-hidden '>
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 text-center'>
      <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
        Compete.Win.
         <span className="block text-emerald-400">Dominate Events.</span>
      </h1>
      <p className="text-xl text-white-600 mb-12 leading-relaxed">
              Join competitive events, predict your winning chances, and become a champion. 
              The ultimate platform for event organizers and competitors.
     </p>

      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  text-emerald-400 mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-lg text-white-600 max-w-2xl mx-auto">
              Powerful features designed for both competitors and event organizers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" >
            <div className=" bg-gray-900 p-8 rounded-2xl shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-emerald-400">
              <div className="w-14 h-14 bg-emerald-400 rounded-xl flex items-center justify-center mb-6">
                    <FaRegCalendarCheck/>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">One-Tap Register</h3>
              <p className="leading-relaxed">
                Register for events instantly with a single tap. No complex forms, just your name and you're in.
              </p>
            </div>

            <div className=" bg-gray-900 p-8 rounded-2xl shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-emerald-400">
              <div className="w-14 h-14 bg-emerald-400 rounded-xl flex items-center justify-center mb-6">
                {/* <TrendingUp className="w-7 h-7 text-green-600" /> */}
                <IoTrendingUp  className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold  text-emerald-400 mb-3">Win Prediction</h3>
              <p className=" leading-relaxed">
                Get AI-powered predictions of your winning chances based on your profile and event timing.
              </p>
            </div>

            <div className=" bg-gray-900 p-8 rounded-2xl shadow-lgtransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-emerald-400">
              <div className="w-14 h-14 bg-emerald-400  rounded-xl flex items-center justify-center mb-6">
                {/* <Trophy className="w-7 h-7 text-purple-600" /> */}
                <IoMdTrophy className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-emerald-400  mb-3">Competitive Events</h3>
              <p className=" leading-relaxed">
                Browse and join competitive events across multiple categories. Find your perfect challenge.
              </p>
            </div>

            <div className=" bg-gray-900 p-8 rounded-2xl shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-emerald-400">
              <div className="w-14 h-14 bg-emerald-400 rounded-xl flex items-center justify-center mb-6">
                {/* <Users className="w-7 h-7 text-orange-600" /> */}
                <FiUsers className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Event Management</h3>
              <p className=" leading-relaxed">
                Organizers can create and manage events with detailed information and track registrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />} */}
    </div>

    
  </div>
  )
}

export default HomePage