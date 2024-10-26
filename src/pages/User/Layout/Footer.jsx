import React from "react";
import fourrays from "../../../assets/FourRays.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-14 bg-black flex flex-col items-center justify-center text-white text-center gap-8">
      <div className="flex flex-col items-center justify-center">
        <img src={fourrays} width={250} height={250} alt="" />
      </div>
      <div>
        <nav className="flex items-center  justify-center gap-10">
          <Link>Features</Link>
          <Link>Resources</Link>
          <Link>Prices</Link>
          <Link>About</Link>
        </nav>
      </div>
      <p className="text-[#FFBD66]">
        Copyright 2024 Celebs code All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
