import React from "react";

const CustomerSupport = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center">
      <div className="bg-gradient-to-b from-[#BC1E2D] to-[#560E15]  text-white mt-[5px] py-16 px-4 lg:px-16 w-full max-w-[100%] mx-auto rounded-[32px] flex h-[473px] flex-col items-center">
        <div className="bg-white text-[#BC1E2D] w-[158px] h-[30px] font-public text-[12px] text-center items-center font-semibold px-[16px] py-[7px] rounded-[60px] mt-[80px] mb-3">
          HELP CENTER
        </div>

        {/* Main Title */}
        <h1 className=" font-poppins text-[45px] font-bold mb-6">
          How we can help you!
        </h1>

        {/* Search Bar */}
        <div className="relative w-[695px] h-[60px] ">
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter your question or keyword"
              className="w-full p-4 pl-12 font-public font-normal text-[16px] pr-32 rounded-full text-[#77878F] focus:outline-none"
            />
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] text-[#BC1E2D]">
            {/* <FiSearch /> */}
            <img src="/MagnifyingGlass.svg" className="w-5 h-5" />
          </div>

          <div className="absolute right-1  top-[29px] transform -translate-y-1/2">
            <button className="bg-[#BC1E2D] text-[14px] font-public text-white w-[184px] h-[48px] px-6 py-2 rounded-full font-medium border-2 border-white">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Assistance Section */}
      <div className="bg-white text-black w-full max-w-4xl p-1 rounded-lg mt-[60px]">
        <h2 className="text-center font-poppins text-[32px] font-black mb-8">
          What can we assist you with{" "}
          <span className="text-[#C10A28]">today</span> ?
        </h2>
      </div>

      <div className="   px-4 lg:px-16 w-full max-w-[100%] mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  max-w-[100%] mx-auto">
          {/* Each option */}
          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            {/* <FiClock className="w-8 h-8 mb-2  text-[#BC1E2D]" /> */}
            <img
              src="/HourglassHigh.svg"
              className="w-[36px] h-[33px] mr-[10px]"
            />
            <p>Check Subscription </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img src="/LockOpen.svg" className="w-[36px] h-[33px] mr-[10px]" />
            <p>Reset Password </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img
              src="/CreditCard.svg"
              className="w-[36px] h-[33px] mr-[10px]"
            />
            <p>Payment Option </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img src="/User.svg" className="w-[36px] h-[33px] mr-[10px]" />
            <p>User & Account </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img src="/Stack.svg" className="w-[36px] h-[33px] mr-[10px]" />
            <p>Wishlist & Cart </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img src="/Notepad.svg" className="w-[36px] h-[33px] mr-[10px]" />
            <p>Shipping & Billing </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img
              src="/CreditCard.svg"
              className="w-[36px] h-[33px] mr-[10px]"
            />
            <p>Shopping Cart & Wallet </p>
          </div>

          <div className="flex flex-row h-[70px] items-center p-4 border border-[#BC1E2D] rounded-lg text-center font-poppins font-medium text-[16px] text-[#191C1F]">
            <img
              src="/Storefront.svg"
              className="w-[36px] h-[33px] mr-[10px]"
            />
            <p>Sell on 4 Rays </p>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="bg-white text-black  w-full max-w-[100%] p-6 rounded-lg mt-8">
        <h2 className="text-center font-poppins text-[32px] font-black mb-8">
          Popular <span className="text-[#C10A28]">topics</span> ?
        </h2>

        <div className="flex flex-col md:flex-row justify-around ml-[30px]">
          <ul className="list-disc space-y-2 text-[#191C1F] font-medium font-poppins text-[18px] ">
            <li>How do I return my item?</li>
            <li className="text-[#BC1E2D]">What is Clicons Returns Policy?</li>
            <li>How long is the refund process?</li>
          </ul>
          <ul className="list-disc space-y-2 text-[#191C1F] font-medium font-poppins text-[18px]">
            <li>What are the 'Delivery Timelines'?</li>
            <li>
              What is 'Discover Your Daraz Campaign <br /> 2022'?
            </li>
            <li>
              What is the Voucher & Gift Offer in this <br /> Campaign?
            </li>
          </ul>
          <ul className="list-disc space-y-2 text-[#191C1F] font-medium font-poppins text-[18px]">
            <li>How to cancel Clicon Order</li>
            <li>Ask the Digital and Device Community</li>
            <li>How to change my shop name?</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-[100%] p-6 rounded-lg mt-6 text-center text-black">
        <h2 className="text-center leading-tight font-poppins text-[32px] font-black mb-8">
          Don’t find your answer.
          <br />
          <span className="text-[#C10A28]">Contact with us</span>
        </h2>

        <div className="flex flex-col w-full max-w-[100%]  md:flex-row  justify-center gap-5">
          {/* Call Us Card */}
          <div className="flex  border border-[#BC1E2D] p-[32px] rounded-[12px] bg-white w-[536px] h-[256px]">
            <div className="mr-4">
              <img src="/Call.svg" alt="Call Icon" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start">
              <p className="text-[#191C1F] text-[18px] font-poppins font-semibold">
                Call us now
              </p>
              <p className="text-[#5F6C72] text-[14px] text-left font-poppins font-normal mb-2">
                we are available online from 9:00 AM to 5:00 PM <br/>(GMT95:45) Talk
                with use now
              </p>
              <p className="text-[24px] mb-[6px] font-poppins font-medium">
                +1-202-555-0126
              </p>

              <button className="mt-4 bg-[#2DB224] font-public text-[14px] text-white px-[24px] mb-[6px] w-[152px] h-[48px] py-2 rounded-full font-bold flex items-center">
                CALL NOW
                <img src="/ArrowRight.svg" alt="Arrow Right" className="ml-2" />
              </button>
            </div>
          </div>

          <div className="flex  border border-[#BC1E2D] p-[32px] rounded-[12px] bg-white w-[536px] h-[256px]">
            <div className="mr-4">
              <img src="/Msg.svg" alt="Call Icon" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start">
              <p className="text-[#191C1F] text-[18px] mb-[6px] font-poppins font-semibold">
                Chat with us
              </p>
              <p className="text-[#5F6C72] text-[14px] text-left font-poppins font-normal mb-2">
                We are available from 9:00 AM to 5:00 PM <br/>(GMT95:45) Talk
                with use now
              </p>
              <p className="text-[24px] mb-[6px] font-poppins font-medium">
                Support@clicon.com
              </p>

              <button className="mt-4 bg-[#BC1E2D] font-public text-[14px] text-white px-[24px] w-[152px] h-[48px] py-2 rounded-full font-bold flex items-center">
                Contact Us
                <img src="/ArrowRight.svg" alt="Arrow Right" className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
