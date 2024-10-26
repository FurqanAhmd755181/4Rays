import React from "react";
import p1 from "../../../assets/Partner1.png";
import p2 from "../../../assets/Partner2.png";
import p3 from "../../../assets/Partner3.png";
import crypto from "../../../assets/Crypto.png";
import { GiCartwheel } from "react-icons/gi";
const Parteners = () => {
  return (
    <div className="pl-44 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[45px] font-[700]">
          <span className="text-[#C10A28]">Our</span> <br /> Partners:
        </h1>
        <div className="flex items-center ">
          <img src={p1} alt="" />
          <img src={p2} alt="" />
          <img src={p3} alt="" />
        </div>
      </div>
      <div>
        <h3 className="text-[30px] font-[700] text-center">
          Lorem ipsum <span className="text-[#C10A28] "> dolor</span> sit amet,
          const
        </h3>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="w-[200px] flex  rounded-full items-center gap-4 shadow-lg px-4 py-2 bg-white">
            <p className="text-[14px] text-[#CC252D] font-[600]">
              Lorem Ipsum Do
            </p>
            <img src={crypto} alt="" className="w-6 h-6" />
          </div>
          <h1 className="text-[30px] font-[700] ">
            Lorem ipsum <br />
            dolor sit amet,{" "}
          </h1>
        </div>
        <div className=" flex flex-col  items-center justify-center gap-3 shadow-lg px-4 py-2 bg-white">
          <span>
            <GiCartwheel size={30} color="#CC252D" />
          </span>
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col  items-center justify-center gap-3 shadow-lg px-4 py-2 bg-white">
          <img src={crypto} width={40} height={40} alt="" />
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col  items-center justify-center gap-3 shadow-lg px-4 py-2 bg-white">
          <img src={crypto} width={40} height={40} alt="" />
          <h4 className="text-[20px] font-[600]">Lorem Ipsum</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col  items-center justify-center gap-3 shadow-lg px-4 py-2 bg-white">
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

export default Parteners;
