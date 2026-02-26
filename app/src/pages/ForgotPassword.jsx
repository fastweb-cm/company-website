import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ForgotPassword = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 text-center text-text'>Reset your Password</h2>
      
      <p className='text-center text-accent/50 mb-6'>Enter your email and we'll send you a reset link.</p>
   <input type="email"
   placeholder='Enter your email'
   className='w-full border p-2 mb-4 text-text border-gray-300 rounded
   focus:outline-none focus:ring-2 focus:ring-red-500' />

   <Button variant='primary' hoverBg='black' className='w-full '>Send Reset Link</Button>
    
    <div className=' text-center mt-4'>
      <Link to="/auth/login" className='text-primary text-sm hover:underline'>Back to Login</Link>
    </div>
    </div>);
};

export default ForgotPassword
