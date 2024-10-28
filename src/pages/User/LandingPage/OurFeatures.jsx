import React from "react";
import crypto from "../../../assets/Crypto.png";

const OurFeatures = () => {
  return (
    <div className="relative">
      <div className="pb-12 flex flex-col gap-1 px-44">
        <div className="w-[200px] flex rounded-full  items-center gap-4 shadow-lg px-4 py-2 bg-white">
          <p className="text-[14px] text-[#CC252D] font-[600]">
            Lorem Ipsum Do
          </p>
          <img src={crypto} alt="" className="w-6 h-6" />
        </div>
        <h3 className="text-[#BC1E2D] text-[24px]">Try on the touch</h3>
        <h3 className="text-[#BC1E2D] text-[48px] font-extrabold">
          Our <span className="text-black">features</span>
        </h3>
        <p className="text-[#302F2F]">Start your happy journey with appratus</p>
        <div className="h-[292px] w-full"></div>
      </div>
      <div className="flex gap-4 absolute bottom-0 w-full px-12">
        <div className="flex flex-col flex-1  items-center justify-center gap-3 shadow-2xl px-4 py-2 bg-white hover:shadow-[0px_2px_16px_0px_#7a7474] rounded-2xl transition ease-in duration-200">
          <img src={crypto} width={40} height={40} alt="" />
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col flex-1  items-center justify-center gap-3 shadow-2xl px-4 py-2 hover:shadow-[0px_2px_16px_0px_#7a7474] rounded-2xl transition ease-in duration-200">
          <img src={crypto} width={40} height={40} alt="" />
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col flex-1  items-center justify-center gap-3 shadow-2xl px-4 py-12 bg-white hover:shadow-[0px_2px_16px_0px_#7a7474] rounded-2xl transition ease-in duration-200">
          <img src={crypto} width={40} height={40} alt="" />
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
