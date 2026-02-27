import { useEffect, useState } from 'react'
import {Navigate,Route,Routes} from "react-router-dom"; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './components/UserDashboard';
import OrganiserDashboard from './components/OrganiserDashboard';
import Prediction from './components/Prediction';
import { Toaster } from 'react-hot-toast';
import { userstore } from "./stores/userstores";
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const {user,checkAuth,allevent,event}=userstore();
  // console.log(event)
 // console.log(user)
  useEffect(() => {
    // if(!user) return;
    checkAuth();
  }, [checkAuth])
  // if(true) return <LoadingSpinner/>
 
  // const [events, setEvents] = useState([]);
  
 useEffect(() => {
   allevent();
 }, [])

//  useEffect(() => {
//     setEvents(event);
// }, [event]);
 

  // const registeredUsers=[]
  const handleRegisterEvent = (eventId) => {
    if (!user) return;
    // setEvents(event.map(event => {
    //   if (event._id === eventId) {
    //     const isRegistered = event.registeredUsers.includes(user.name);
    //     return {
    //       ...event,
    //       registeredUsers: isRegistered 
    //         ? event.registeredUsers.filter(u => u !== user.name)
    //         : [...event.registeredUsers, user.name]
    //     };
    //   }
    //   return event;
    // }));
  };


  return (
   <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
				</div>
			</div>
    <div className='relative z-50 pt-20'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={user ? <Navigate to='/'/>:<SignUpPage/>}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <LoginPage />}/>
        <Route path='/user-dashboard' element={<UserDashboard  onRegisterEvent={handleRegisterEvent}/>}/>
        <Route path='/organiser-dashboard' element={<OrganiserDashboard />}/>
         {/* <Route path='/prediction' element={<Prediction user={user}/>} /> */}

       </Routes>
    </div>
    <Toaster/>
  </div>
  )
}

export default App
