import React from "react";

import fourrays from "../../../assets/FourRaysLogo.svg";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-28 py-5 flex items-center justify-between bg-black">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center gap-3">
          <Link to="/sign-in" className="text-white">
            Sign in{" "}
          </Link>
          <Link
            to="/sign-up"
            className="text-white bg-[#C20009] rounded-full px-6 py-2"
          >
            Sign up{" "}
          </Link>
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
