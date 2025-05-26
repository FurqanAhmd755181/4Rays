import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import pic from "../../../../assets/MacBook.png";
export const CTASection = () => {
  return (
      
    <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16 rounded-lg shadow-lg space-y-6 md:space-y-0">
    {/* Text Section */}
    <div className="flex-1 px-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Simplify your workday with <span className="text-[#BC1E2D]">"4Rays"</span>
      </h2>
      <p className="text-gray-500 mt-2 mb-6">
        Make it easy for your customers to check in & checkout with our powerful AI Facial Recognition System.
      </p>
      <ul className="space-y-3 text-gray-600">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="flex items-center">
            <FaCheckCircle className="text-[#BC1E2D] mr-2" />
            Lorem Ipsum is simply dummy text of the printing.
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center space-x-6">
        <button className="bg-[#BC1E2D] text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition duration-300">
          GET STARTED
        </button>
        <a href="#" className="text-[#BC1E2D] font-semibold hover:underline">
          4 Rays AI FAQ’s →
        </a>
      </div>
      <p className="text-gray-400 mt-6 text-sm">
        Now available on all paid plans to purchase in English, Spanish<br />
        Additional languages coming soon.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center h-full relative items-center">
  {/* Background box (full height and straight) */}
  <div className="bg-[#BC1E2D] w-[400px] h-[200px]  lg:max-w-screen-sm [400px] lg:h-[400px] " />

  {/* Laptop image (slightly smaller and positioned outside the background) */}
  <img
    src={pic} // Replace with your laptop image path
    alt="4 Rays AI on laptop"
    className=" z-10 w-[70%] md:w-[50%] mr-[70%] absolute  lg:mr-[50%] lg:w-[70%]    translate-y-6  shadow-lg"
  />
</div></div>
  )
}
