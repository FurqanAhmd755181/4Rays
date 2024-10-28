import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { ImStack } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
const SubscriptionConfirmation = () => {
  return (
    <div className='flex items-center justify-center'>
     <div className='lg:w-[1320px] lg:h-[524px]  flex  items-center justify-center flex-col p-4'>
   
      {/* Check icon */}
      <div className='he-[196px] flex flex-col items-center justify-center gap-4'>
      <PiCheckCircleDuotone  className='h-[88px] w-[88px] text-[#2DB224]  '/>

      {/* Main message */}
      <h1 className="text-2xl font-semibold font-sans text-center mb-2">
        Your Subscription is successfully Activated for 1 Month.
      </h1>

      {/* Subtext */}
      <p className="text-[#5F6C72] font-normal w-[424px] font-sans text-[14px] text-center max-w-md mb-6">
        Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus.
        Donec volutpat mollis nulla non facilisis.
      </p>
      </div>
      {/* Buttons */}
      <div className="flex space-x-4 ">
        {/* Dashboard button */}
        <button className="flex w-[215px] h-[48px] items-center px-6 py-2 border-2 border-[#FFE7D6] rounded-[60px] hover:bg-red-100 leading-[48px] text-[14px] font-sans font-bold text-[#BC1E2D]">
          <ImStack className="mr-2 h-[20px] w-[20px] font-bold " />
          GO TO DASHBOARD
        </button>

        {/* View Order button */}
        <button className="flex w-[167px] h-[48px] items-center px-6 py-2 bg-[#BC1E2D] text-white rounded-[60px] hover:bg-red-600  font-sans font-bold text-[14px] tracking-wide leading-[48px]">
          VIEW ORDER
          <FaArrowRight className="ml-2 h-[20px] w-[20px] text-center text-[8px]"  />
        </button>
      </div>

    </div>
    </div>
  );
};

export default SubscriptionConfirmation;
