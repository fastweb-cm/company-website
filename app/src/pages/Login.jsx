import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaEye, FaEyeSlash} from "react-icons/fa"
import Button from '../components/Button';

const Login = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 className='text-2xl font-bold
      text-center mb-6 text-gray-800'>Welcome Back!</h2>

        <input type="email" placeholder='Email' className='w-full border p-3 border-gray-300 text-gray-950 rounded mb-4
        focus:outline-none focus:ring-2 focus:ring-red-500' />
    
    <div className='relative mb-2'>
    <input type={show ? "text" : "password"} placeholder='Password' className='w-full border p-3 text-gray-950 border-gray-300 rounded mb-2
    focus:outline-none focus:ring-2 focus:ring-red-500' />

    <span onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 flex items-center
      cursor-pointer text-gray-700 hover:text-gray-900' >
      {show ? <FaEyeSlash size={18}/> : <FaEye  size={18}/>}
      </span>
      </div>

    <div className='flex justify-end mb-4'>
       < Link to="/auth/forgot-password"
       className=' text-sm text-red-600 hover:underline'>Forgot Password?</Link>
    </div>

    <button className='w-full bg-primary text-white p-3 rounded-2xl
    font-semibold hover:bg-red-700 transition'>Login</button>
    

    <div className='flex items-center my-6'>
      <div className='flex-grow h-px bg-gray-300'></div>
     </div>
    

   
    </div>
  );
};

export default Login
