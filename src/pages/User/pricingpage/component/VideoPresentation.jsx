import React from 'react';
import { FaPlay } from 'react-icons/fa';

function VideoPresentation() {
  return (
    <div className="flex items-center space-x-[400px] p-6">
      <div className="flex flex-col">
        <p className="text-[#BC1E2D] font-handwritten italic text-lg">Try on the touch</p>
        <h2 className="text-3xl font-bold">
          Watch <span className="text-[#BC1E2D] ">Video</span> Presentation
        </h2>
        <p className="text-gray-600 mt-1">App itself is fast, Fluid and loads quickly</p>
      </div>
      <div className="text-[#BC1E2D] border-4 border-[#BC1E2D] rounded-full p-4 hover:bg-[#BC1E2D] hover:text-white transition duration-300">
        <FaPlay size={24} />
      </div>
    </div>
  );
}

export default VideoPresentation;
