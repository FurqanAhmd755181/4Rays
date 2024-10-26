import React from "react";
import X from "../../../assets/Group 81.png";

const GetInTouch = () => {
  return (
    <div className="flex items-center justify-around w-full mt-10">
      <div className="">
        <h3 className="text-[#BC1E2D] text-[24px]">Get in touch</h3>
        <h3 className="text-[#BC1E2D] text-[48px] font-extrabold">
          Write <span className="text-black">a message</span>
        </h3>
        <p className="text-[#302F2F]">
          We are available. Please send us a message
        </p>
        <div className="flex flex-col gap-4 pt-10 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full max-w-md px-4 py-3 rounded-lg text-gray-700 placeholder-gray-400 bg-white border shadow-lg border-gray-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-md px-4 py-3 rounded-lg text-gray-700 placeholder-gray-400 bg-white border shadow-lg border-gray-200"
          />
        </div>
      </div>
      <div className=" mt-auto relative">
        <input
          type="text"
          placeholder="Write a message"
          className="w-[527px] h-[122px] px-4 py-3 rounded-lg text-gray-700 placeholder-gray-400 bg-white border shadow-lg border-gray-200"
        />
        <img src={X} alt="" className="absolute bottom-0 -z-10 -left-[10rem]"/>
      </div>
    </div>
  );
};

export default GetInTouch;
