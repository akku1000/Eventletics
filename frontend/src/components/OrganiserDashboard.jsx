import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { userstore } from '../stores/userstores';
import { useEffect } from 'react';

const OrganiserDashboard = () => {
   const{user,createevent,loading,event,allevent,deleteevent}=userstore();
  // console.log(user)
   const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });
  const [scevent,setScevent]=useState([])
   useEffect(()=>{
       setScevent(event.filter(e=>e.organiser._id===user?._id))
   },[])
  //sevent.filter((e)=>e.organiser._id===user._id)

  const handleSubmit = async(e) => {
    e.preventDefault();
   // onCreateEvent(formData);
    // setFormData({ title: '', description: '', date: '', location: '' });
    await createevent(formData)
    await allevent()
    setShowCreateForm(false);
  };
  const handledelete=(eventid)=>{
    // e.preventDefault();
     deleteevent(eventid)
  }

  return (
    <div >
       <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Organizer Dashboard</h1>
            <p className="text-lg ">Create and manage your events</p>
          </div>
          <button 
            onClick={() => setShowCreateForm(!showCreateForm)}
            data-testid="create-event-toggle-button"
            className="bg-emerald-600 hover:bg-emerald-700  text-white 
            px-4 h-12 font-semibold flex items-center rounded-md btn-hover"
          >
         
            <IoIosAddCircleOutline  className="w-4 h-4 mr-2 text-white"/>
            {showCreateForm ? 'Cancel' : 'Create Event'}
          </button>
        </div>
      </div>

      {showCreateForm && (
          <div className="bg-gray-900 py-8 border  border-emerald-400 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300"
              >
                Event Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <User className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </div>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  data-testid="create-event-title-input"
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>

            </div>
              {/* <div className="">
                 <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Event title
              </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  data-testid="create-event-title-input"
                  className="h-12 border-slate-300 focus:border-blue-600"
                />
              </div> */}
              <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300"
              >
               Description
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <User className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </div>
                <textarea
                 id="description"
                  placeholder="Enter event description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  data-testid="create-event-description-input"
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>

            </div>

              {/* <div className="space-y-2">
                <label htmlFor="description" className="font-medium">Description</label>
                <textarea
                  id="description"
                  placeholder="Enter event description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  data-testid="create-event-description-input"
                  className="min-h-32 border-slate-300 focus:border-blue-600 resize-none"
                />
              </div> */}
                  <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-300"
              >
                Event Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <User className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </div>
                <input
                  id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    data-testid="create-event-date-input"
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>

            </div>

              <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-300"
              >
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <User className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </div>
                <input
                  id="location"
                    type="text"
                    placeholder="Enter event location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                    data-testid="create-event-location-input"
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>

            </div>
{/* 
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className=" font-medium">Event Date</label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    data-testid="create-event-date-input"
                    className="h-12 border-slate-300 focus:border-blue-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className=" font-medium">Location</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Enter event location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                    data-testid="create-event-location-input"
                    className="h-12 border-slate-300 focus:border-blue-600"
                  />
                </div>
              </div> */}

              <button 
                type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg btn-hover"
                data-testid="create-event-submit-button"
              >
                Create Event
              </button>
            </form>
          </div>
        )}

       <div>
          <h2 className="text-2xl font-bold  mb-6">All Events ({event.length})</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.map(event => ( 
              <div 
                key={event._id} 
                className=" bg-gray-900 p-8 rounded-2xl shadow-lg  border border-emerald-400"
              >
                <div className="bg-gradient-to-r border h-32 flex border-emerald-600 items-center justify-center">
                  {/* <Trophy className="w-16 h-16 text-white" /> */}
                  <FaTrophy className="w-16 h-16 text-emerald-600 " />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold  mb-3">{event.title}</h3>
                  <p className="text-emerald-400 mb-4 text-sm leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-emerald-400 text-sm">
                      {/* <Calendar className="w-4 h-4 mr-2 text-blue-600" /> */}
                      <FaRegCalendarCheck className='w-4 h-4 mr-2 text-white'/>
                      <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center text-emerald-400 text-sm">
                      {/* <MapPin className="w-4 h-4 mr-2 text-blue-600" /> */}
                      <FiMapPin className="w-4 h-4 mr-2 text-white"/>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-emerald-400 text-sm">
                      {/* <Users className="w-4 h-4 mr-2 text-green-600" /> */}
                      <CiUser className="w-4 h-4 mr-2 text-white"/>
                      <span>Registered</span>
                    </div>
                    {/* {event.registeredUsers.length}  */}
                  </div>

                </div>
            {event.organiser===user?._id &&     <button
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
    onClick={()=>handledelete(event._id)}>
                        Delete 
                        </button>}
              </div>
            ))}
          </div>
        </div>
      
    </div>
  )
}

export default OrganiserDashboard