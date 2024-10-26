import React from 'react';
import { FaPlay } from 'react-icons/fa';

function VideoPresentation() {
  return (
    <div className="flex items-center space-x-[400px] p-6">
      <div className="flex flex-col">
        <p className="text-red-600 font-handwritten italic text-lg">Try on the touch</p>
        <h2 className="text-3xl font-bold">
          Watch <span className="text-red-600">Video</span> Presentation
        </h2>
        <p className="text-gray-600 mt-1">App itself is fast, Fluid and loads quickly</p>
      </div>
      <div className="text-red-600 border-4 border-red-600 rounded-full p-4 hover:bg-red-600 hover:text-white transition duration-300">
        <FaPlay size={24} />
      </div>
    </div>
  );
}

export default VideoPresentation;
