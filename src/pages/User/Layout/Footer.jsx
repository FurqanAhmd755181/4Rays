import React from "react";
import fourrays from "../../../assets/FourRays.png";
import { Link } from "react-router-dom";
import blood_splash from "../../../assets/blood_splash.svg";
const Footer = () => {
  return (
      <div
          className="relative overflow-hidden px-8 mt-14 bg-black flex flex-col items-center justify-center text-white text-center gap-8">
          <img src={blood_splash} width="300" height="300" className="absolute left-0" alt=""/>
          <img src={blood_splash} width="300" height="300" className="absolute right-[-100px]" alt=""/>
          <div className="flex flex-col items-center justify-center">
              <img
                  src={fourrays}
                  width={250}
                  height={250}
                  alt="Logo"
                  className="brightness-100 contrast-130 saturate-500 shadow-lg"
              />

          </div>
          <div>
              <nav className="flex items-center  justify-center gap-10">
                  <Link>Blogs</Link>
                  <Link>About Us</Link>
                  <Link>Customer Support</Link>
                  <Link>Purchase</Link>
              </nav>
          </div>
          <p className="text-[#FFBD66]">
              Copyright 2024 Celebs code All Right Reserved
          </p>
      </div>
  );
};

export default Footer;
