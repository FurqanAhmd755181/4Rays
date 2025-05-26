import React from "react";
import laptop from "../../../assets/Maccbook.svg";
import rectangle from "../../../assets/Rectangle 16.png";
import x from "../../../assets/Group 31.png";
import crypto from "../../../assets/Crypto.png";
import rays from "../../../assets/4 Rays.png";
import multiplesvg from "../../../assets/multiplepic.svg";

const ShowCase = () => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        <h3 className="text-[30px] font-extrabold pl-20 mb-12">
          Lorem ipsum dolor sit amet,const
        </h3>
        <div className="flex justify-between">
          <div className="basis-3/4">
            <img width="800" height="300" src={multiplesvg} />
          </div>

          <div className="flex flex-col gap-2 basis-3/4">
            <div className=" flex  rounded-full self-end items-center gap-4 shadow-lg px-4 py-2 bg-white">
              <p className="text-[14px] text-[#CC252D] font-[600]">
                Lorem Ipsum Do
              </p>
              <img src={crypto} alt="" className="w-6 h-6" />
            </div>
            <h3 className="text-[30px] font-extrabold text-right w-[90%]">
              Lorem ipsum dolor sit amet,const
            </h3>
            <p className="text-[#6F6F6F] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget semper sem.
            </p>
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-red-600 text-2xl font-bold">500+</h2>
                <p className="text-gray-500">Lorem Ipsum</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-red-600 text-2xl font-bold">100</h2>
                <p className="text-gray-500">Lorem Ipsum</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-red-600 text-2xl font-bold">10</h2>
                <p className="text-gray-500">Lorem Ipsum</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h2 className="text-red-600 text-2xl font-bold">2k+</h2>
                <p className="text-gray-500">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <img src={rays} alt="" className="absolute right-0 -bottom-[15rem]" />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
