import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai"; // For the eye icon, you may need to install react-icons
import { Link } from "react-router-dom";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-red-300 w-[300px] max-w-full z-10">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Sign in to your account
        </h2>

        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your password"
            />

           
            <button
              type="button"
              className="absolute inset-y-0 right-10 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              <AiOutlineEye size={20} />
            </button>
          
            <a
              href="#"
              className="text-sm text-red-500 absolute right-0 top-0 mt-1"
            >
              Forget Password
            </a>
          </div>

          {/* Login Button */}
          <Link to="/MyAccount"> 
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md font-semibold text-lg hover:bg-red-700 mb-4"
          >
            LOGIN
          </button>
          </Link>
        </form>

        {/* Additional Options */}
        <div className="text-center text-gray-500 mb-2">
          Don’t have an account?
        </div>

        <button className="w-full py-3 border border-red-600 text-red-600 rounded-md font-semibold text-lg hover:bg-red-50">
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default SigninForm ;
