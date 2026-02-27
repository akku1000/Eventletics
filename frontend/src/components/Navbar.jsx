import React from 'react'
import {Link} from 'react-router-dom'
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { userstore } from '../stores/userstores';
import { LuUsersRound } from "react-icons/lu";
import { div, span } from 'framer-motion/client';

const Navbar = () => {
  const {user,logout}=userstore();
  // console.log(user)
  // console.log(user?.role)
  const isAdmin=user?.role==="organiser";
  // console.log(isAdmin)
   const navigate = useNavigate();

  return (
     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/"
            className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
          >
            Eventletics
          </Link>
         
          <nav className="flex flex-wrap items-center gap-4">
            {user&&(<span>Welcome {user.name}</span>)}

           {isAdmin&&(
            <Link
								to={"/organiser-dashboard"}
								className='relative flex items-center group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out'
							>
                <LuUsersRound className='mr-2 size={18}'/>
								<span className=''>orgainser Dashboard</span>
						   	</Link>
           )}
           
           {user&&!isAdmin&&(
             <Link
								to={"/user-dashboard"}
								className='relative flex items-center group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out'
							>
                <LuUsersRound className='mr-2 size={18}'/>
								<span className=''>user Dashboard</span>
						   	</Link>
           )}

            {user?(
               <div className='flex gap-4'>
                 {/* <span>Welcome {user.name}</span> */}
{/* 
                 <Link
								to={"/user-dashboard"}
								className='relative flex items-center group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out'
							>
                <LuUsersRound className='mr-2 size={18}'/>
								<span className=''>User Dashboard</span>
						   	</Link> */}
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out"
            onClick={logout}
              >
                {/* <LogOut size={18} /> */}
                <CiLogout className='mr-2 size={18}'/>
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
              
               </div>
             
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  {/* <UserPlus className="mr-2" size={18} /> */}
                  <FaUserPlus className='mr-2 size={18}'/>
                  Get Started
                </Link>
                <Link
                  to={"/login"}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out "
                >
                  {/* <LogIn className="mr-2" size={18} /> */}
                  <LuLogIn className='mr-2 size={18}'/>
                  Login
                </Link>
              </>
            )}

          
           
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar