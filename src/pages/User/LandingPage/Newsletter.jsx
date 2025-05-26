import React from 'react';
import { FiSend } from 'react-icons/fi';

function Newsletter() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r h-[290px] mt-10 from-black to-gray-900 p-8 rounded-3xl">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 w-full max-w-4xl px-4">
        
        {/* Left side - Text Section */}
        <div className="text-center md:text-left text-white">
          <p className="text-sm italic text-gray-300">Subscribe today</p>
          <h2 className="text-3xl font-bold">
            <span className="text-red-600">Subscribe </span>
            <span className="text-yellow-500">Our </span>
            <span className="text-white">Newsletter</span>
          </h2>
          <p className="text-sm text-gray-400">We are available. Please send us a message</p>
        </div>

        {/* Right side - Input Section */}
        <div className="flex items-center w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 text-gray-700 focus:outline-none"
          />
            <FiSend  className='text-[#C10A28] mr-5'/>
        </div>
        
      </div>
    </div>
  );
}

export default Newsletter;
