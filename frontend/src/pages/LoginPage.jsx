import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { userstore } from '../stores/userstores';
const LoginPage = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
  
  const {login,loading,user}=userstore();
  // console.log(user+"in login")
  const handleSubmit=(e)=>{
    e.preventDefault();
    login(email,password,role);
  }

  return (
   <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
    
      <h2 className='mt-6 text-center text-3xl font-extrabold text-emerald-400'>Create your account</h2>
   

    
      <div className=' mt-8 sm:mx-auto sm:w-full sm:max-w-md border border-emerald-400 bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-300'>
              Email address
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                {/* <Mail className='h-5 w-5 text-gray-400' aria-hidden='true' /> */}
              </div>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
                rounded-md shadow-sm
                 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
                 focus:border-emerald-500 sm:text-sm'
                placeholder='you@example.com'
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-300'>
              Password
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                {/* <Lock className='h-5 w-5 text-gray-400' aria-hidden='true' /> */}
              </div>
              <input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
                rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
                placeholder='••••••••'
              />
            </div>
          </div>

          <div className="space-y-2">
             <label
                htmlFor="i am a"
                className="block text-sm font-medium text-gray-300"
              >
                I am a
              </label>

              <div className=" flex gap-3 justify-center p-3 bg-gray-700 rounded-lg cursor-pointer transition-all">
                 

                <input
                  id="user"
                  type="radio"
                   name="userType"
                  required
                  value="user"
                  onChange={(e)=>{setRole(e.target.value)}}
                   className=""
                 
                />
                <span className="font-medium">User</span>
              
               
               

                <input
                  id="organiser"
                  type="radio"
                   name="userType"
                  required
                  value="organiser"
                  onChange={(e)=>{setRole(e.target.value)}}
                />
                <span className="font-medium">Organizer</span>
              
             </div>

            </div>

          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent 
            rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
             hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50'
            disabled={loading}
          >
            {loading ? (
              <>
                {/* <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' /> */}
                Loading...
              </>
            ) : (
              <>
                {/* <UserPlus className='mr-2 h-5 w-5' aria-hidden='true' /> */}
                 Login
              </>
            )}
          </button>
        </form>

        <p className='mt-8 text-center text-sm text-gray-400'>
         Not a member?{" "}
          <Link to='/SignUp' className='font-medium text-emerald-400 hover:text-emerald-300'>
            Signup now
          </Link>
        </p>
      </div>
  
  </div>
  )
}

export default LoginPage