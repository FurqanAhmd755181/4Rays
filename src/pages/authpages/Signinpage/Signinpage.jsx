// SignInPage.js

import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from "../../../assets/logo.png"
import blood from "../../../assets/signupblood.png";
import group from "../../../assets/Group.png";
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black relative">

<img src={blood} alt="Logo" className=" h-full  absolute mr-[90%] brightness-80 contrast-300 " />

      {/* Background design */}

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/background-image.jpg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

    
 
      <img
  src={group}
  alt="Logo"
  className="h-[500px] w-[500px] absolute mr-[20%] blur-sm brightness-40 contrast-300"
/>



      <div className="  top-1/4 left-1/4 text-white text-left mr-4 z-40">
      
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">WELCOME <spin>!</spin> </h1>
        <p className="text-lg">Sign In to continue</p>
      </div>

      {/* Sign-in form */}
      <div className="relative z-10 max-w-[554px]  h-[554px]  bg-gray-50 bg-opacity-80 p-10 rounded-lg shadow-lg">
  <div className="flex justify-center mb-6">
    <img src={logo} alt="Logo" className="w-20 h-20" />
  </div>
  <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

  <form className="space-y-4">
    <div className="relative">
      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
  type="text"
  placeholder="Username"
  className="w-full pl-10 pr-4 py-2  border border-gray-500 rounded-3xl focus:outline-none focus:ring-2 bg-transparent"
/>
    </div>

    <div className="relative">
      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="password"
        placeholder="Password"
        className="w-full pl-10 pr-4 py-2 border rounded-2xl  border-gray-500  focus:outline-none focus:ring-2 bg-transparent"
      />
    </div>

    <div className="flex items-center">
    <input type="checkbox" id="staySignedIn" className="mr-2 bg-transparent" />

      <label htmlFor="staySignedIn" className="text-gray-500">Stay signed in</label>
    </div>
<Link to="/">
    <button type="submit" className="w-full py-2 bg-[#CA2222] text-white font-bold rounded-2xl hover:bg-red-700">
      Sign in
    </button>
    </Link>
  </form>

  <p className="text-center mt-4 text-gray-600">
    Don’t have an account? <Link to="/sign-up"  className="text-[#CA2222] hover:underline">Sign up now</Link>
  </p>
</div>

    </div>
  );
};

export default SignInPage;
