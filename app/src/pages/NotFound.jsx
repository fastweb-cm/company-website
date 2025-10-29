import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
