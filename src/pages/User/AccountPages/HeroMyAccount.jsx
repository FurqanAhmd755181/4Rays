import React from "react";
import crypto from "../../../assets/Crypto.png";
import mobile from "../../../assets/Mobile.png";
import x from "../../../assets/BG 1.svg";
import { FaRegCirclePlay } from "react-icons/fa6";
import MyAccount from "./MyAccount";

const HeroMyAccount = () => {
  return (
    <div className="mt-10 px-44 grid grid-cols-12 gap-8 justify-between">
      {/* Left Column */}
      <div className="col-span-6 flex flex-col gap-4">
        <div className="w-[200px] flex rounded-full items-center gap-4 shadow-lg px-4 py-2 bg-white">
          <p className="text-[14px] text-[#CC252D] font-[600]">
            Lorem Ipsum Do
          </p>
          <img src={crypto} alt="Crypto" className="w-6 h-6" />
        </div>

        <h1 className="text-[50px]">
          <span className="mr-2 text-[#BC1E2D] font-[800]">Four</span>
          <span className="mr-2 text-[#FFBD66] font-[800]">Rays</span>
          <span className="font-[800]">
            Created <br /> To Make <br /> Business Easy
          </span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec
          eget semper sem.
        </p>

        <div className="flex items-center gap-6">
          <button className="px-8 bg-black rounded-full py-2 text-white">
            Get Started
          </button>
          <button className="px-8 flex items-center gap-2 bg-white shadow-lg rounded-full py-2">
            <FaRegCirclePlay color="#BC1E2D" size={23} /> Watch Demo
          </button>
        </div>
      </div>

      {/* Right Column with MyAccount and Images */}
      <div className="col-span-6 flex flex-col items-center gap-6 px-12 relative">
        {/* MyAccount Component positioned absolutely */}
        <div className="absolute top-0 -mt-10 z-20 bg-[#ffff] ml-40">
          {" "}
          {/* Adjust -mt-12 as needed */}
          <MyAccount />
        </div>

        {/* Image Section */}
        <div className="relative w-full flex flex-col items-center">
          <img src={mobile} alt="Mobile" className="w-72 h-auto -mt-8" />{" "}
          {/* Adjust -mt-20 as needed */}
          <img src={x} alt="X icon" className="h-auto mt-4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroMyAccount;
