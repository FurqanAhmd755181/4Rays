import React from "react";

import fourrays from "../assets/FourRays.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-28 py-5 flex items-center justify-between bg-black">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center gap-3">
          <button className="text-white">Sign in </button>
          <button className="text-white bg-[#C20009] rounded-full px-6 py-2">
            Sign up{" "}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={fourrays} alt="" />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
