import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Button from '../components/Button';
import usePasswordToggle from '../utils/usePasswordToggle';

const Login = () => {

  const { visible, toggle, type } = usePasswordToggle();

  return (
    <div>
      <img src="/logo.png" alt="" className='w-xl rounded mx-auto' />

      <h2 className='text-2xl font-bold
      text-center mb-6 text-text'>Welcome Back!</h2>

      <input type="email" placeholder='Email' className='w-full border p-3 border-muted text-text rounded mb-4
        focus:outline-none focus:ring-2 focus:ring-primary-500' />

      <div className='relative mb-2'>
        <input type={type} placeholder='Password' className='w-full border p-3 text-text border-muted rounded mb-2
    focus:outline-none focus:ring-2 focus:ring-primary-500' />

        <span onClick={() => toggle(visible)} className='absolute inset-y-0 right-3 flex items-center
      cursor-pointer text-text/80 hover:text-text' >
          {visible ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </span>
      </div>

      <div className='flex justify-end mb-4'>
        < Link to="/auth/forgot-password"
          className=' text-sm text-primary hover:underline'>Forgot Password?</Link>
      </div>

      <Button variant='primary' hoverBg='black' className='w-full' >Login</Button>
    </div>
  );
};

export default Login
