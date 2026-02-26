import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';

const Login = () => {
  return (
    <div>
        <img src="/logo.png" alt="" className='w-xl rounded mx-auto'/>

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

    <Button variant='primary' hoverBg='black'className='w-full' >Login</Button>
    

    <div className='flex items-center my-6'>
      <div className='flex-grow h-px  bg-gray-300'></div>
      <div className='flex-grow h-px bg-gray-300'></div>
    </div>
    </div>
  );
};

export default Login
