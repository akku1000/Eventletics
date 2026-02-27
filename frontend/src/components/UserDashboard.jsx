import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { userstore } from "../stores/userstores";
import { IoIosAddCircleOutline } from "react-icons/io";
import { a } from "framer-motion/client";
import { use } from "react";

const UserDashboard = () => {
  const { user, event, registerevent, unregister, allevent,searchevent } = userstore();
  //console.log(user)
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/");
  };
  //console.log(event)
  useEffect(() => {
    const delay=setTimeout(() => {
      if(searchQuery.trim()!==""){
        searchevent(searchQuery);
      }
      else{
        allevent();
      }
    },500)
    return () => clearTimeout(delay);
  }, [searchQuery]);

  const filteredEvents = event.filter((event) =>
    // event.title.toLowerCase().includes(searchQuery.toLowerCase())
    console.log("typing"),
  );
 
  const Register = (eventid) => {
    if (!isRegistered(eventid)) {
      registerevent(eventid);
    } else {
      unregister(eventid);
    }
  };

  const isRegistered = (eventId) => {
    if (user) {
      const ev = event.find((e) => e?._id.toString() === eventId);
      return ev && ev.participants.includes(user._id); //user.name
    }
  };

  return (
    <div className="">
      {/* <div className="max-w-7xl mx-auto px-6 py-12"> */}
      {/* Header */}
      <div className="mb-8 text-center text-emerald-400">
        <h1 className="text-4xl font-bold  mb-2">Your Dashboard</h1>
        <p className="text-lg ">Discover and register for competitive events</p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-5">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />

          <input
            type="text"
            placeholder="Search events by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 w-full border-slate-100  bg-emerald-700 text-base"
          />
        </div>

        <button
          onClick={() => navigate("/prediction")}
          data-testid="prediction-button"
          className="h-14 bg-emerald-700 hover:bg-emerald-600 text-white px-8 font-semibold btn-hover"
        >
          {/* <TrendingUp className="w-5 h-5 mr-2" /> */}
          Predict Winning Chances
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className=" bg-gray-900 p-8 rounded-2xl shadow-lg  border border-emerald-400"
              data-testid={`event-card-${event.id}`}
            >
              <div className="bg-gradient-to-r bg-gray-900 border  h-32 flex items-center justify-center">
                <FaTrophy className="w-16 h-16 text-emerald-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-emerald-400 font-bold mb-3">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-emerald-400 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-emerald-400 text-sm">
                    <FaRegCalendarCheck className="w-4 h-4 mr-2 text-white" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <FiMapPin className="w-4 h-4 mr-2 text-white" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <CiUser className="w-4 h-4 mr-2 text-white" />
                    <span>{event.registeredUsers.length} Registered</span>
                  </div>
                </div>

                <button
                  onClick={() => onRegisterEvent(event.id)}
                  data-testid={`register-event-${event.id}`}
                  className={`w-full h-11 font-semibold btn-hover ${
                    isRegistered(event.id)
                      ? "bg-gray-900 text-emerald-400 border "
                      : "bg-gray-900 border  "
                  }`}
                >
                  {isRegistered(event.id) ? "Registered ✓" : "Register Now"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
           
            <p className="text-xl">No events found matching your search.</p>
          </div>
        )} */}
      </div>

      <div>
        <h2 className="text-2xl font-bold  mb-6">
          All Events ({event.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.map((events) => (
            <div
              key={events._id}
              className=" bg-gray-900 p-8 rounded-2xl shadow-lg  border border-emerald-400"
            >
              <div className="bg-gradient-to-r border h-32 flex border-emerald-600 items-center justify-center">
                {/* <Trophy className="w-16 h-16 text-white" /> */}
                <FaTrophy className="w-16 h-16 text-emerald-600 " />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold  mb-3">{events.title}</h3>
                <p className="text-emerald-400 mb-4 text-sm leading-relaxed">
                  {events.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-emerald-400 text-sm">
                    {/* <Calendar className="w-4 h-4 mr-2 text-blue-600" /> */}
                    <FaRegCalendarCheck className="w-4 h-4 mr-2 text-white" />
                    <span>
                      {new Date(events.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    {/* <MapPin className="w-4 h-4 mr-2 text-blue-600" /> */}
                    <FiMapPin className="w-4 h-4 mr-2 text-white" />
                    <span>{events.location}</span>
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    {/* <Users className="w-4 h-4 mr-2 text-green-600" /> */}
                    <CiUser className="w-4 h-4 mr-2 text-white" />
                    <span>Registered</span>
                  </div>
                  {/* {event.registeredUsers.length}  */}
                </div>
              </div>

  
               <button
                className="w-full
    sm:self-start
    bg-emerald-600 hover:bg-gray-600
    text-white
    py-2
    px-5
    rounded-md
    text-sm
    transition
    mt-4"
                onClick={() => Register(events?._id)}
              >
                {isRegistered(events?._id) ? "Un-register" : "Register Now"}
                {/* Register Now */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
