import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">
        <div className="w-full max-w-2xl p-10 bg-white shadow-lg rounded-xl">

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;