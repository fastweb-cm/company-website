import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">
        <div className="w-full max-w-2xl p-10 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center text-red-700 mb-8">
          FastWEB
        </h1>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;