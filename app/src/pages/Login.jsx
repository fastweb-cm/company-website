import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold
      text-center mb-6 text-gray-800'>Welcome Back!</h2>

        <input type="email" placeholder='Email' className='w-full border p-3 border-gray-300 text-gray-950 rounded mb-4
        focus:outline-none focus:ring-2 focus:ring-red-500' />
    
    
    <input type="password" placeholder='Password' className='w-full border p-3 text-gray-950 border-gray-300 rounded mb-2
    focus:outline-none focus:ring-2 focus:ring-red-500' />

    <div className='flex justify-end mb-4'>
       < Link to="/auth/forgot-password"
       className=' text-sm text-red-600 hover:underline'>Forgot Password?</Link>
    </div>

    <button className='w-full bg-red-700 text-white p-3 rounded-2xl
    font-semibold hover:bg-red-800 transition'>Login</button>
    

    <div className='flex items-center my-6'>
      <div className='flex-grow h-px bg-gray-300'></div>
      <span className='px-3 text-gray-400 text-sm'>OR</span>
      <div className='flex-grow h-px bg-gray-300'></div>
    </div>
    

    <p className='text-center text-gray-900 text-sm '>Don't have an account? <Link to="/auth/signup" className='text-red-600 hover:underline'>Sign Up</Link></p>
    {/* <span className='text-blue-500 cursor-pointer hover:underline'>Sign up</span> */}
    
    </div>
  );
};

export default Login
