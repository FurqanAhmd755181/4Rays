import React from 'react';
import blood from "../../../../assets/blood.png"
function CallToAction() {
  return (
    <div className="bg-black text-white py-16 flex flex-col items-center rounded-b-[200px] overflow-hidden">
    <img src={blood} alt="" className="absolute mr-[80%] mt-[-50px]" />
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold">
        Whatever work you do, you can <br className="hidden md:block" />
        do it in <span className="text-[#BC1E2D]">4Rays</span>
      </h1>
    </div>
    <div className="mt-8 flex gap-4">
      <button className="bg-[#BC1E2D] text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300">
        GET STARTED
      </button>
      <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
        TALK TO SALES
      </button>
    </div>
  </div>
  
  );
}

export default CallToAction;
