import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
export const CTASection = () => {
  return (
      
  <div className="flex flex-col md:flex-row items-center  bg-white p-6 md:p-16 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-8">
  {/* Text Section */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-gray-800">
      Simplify your workday with <span className="text-red-600">"4Rays"</span>
    </h2>
    <p className="text-gray-500 mt-2 mb-6">
      Make it easy for your customers to check in & checkout with our powerful AI Facial Recognition System.
    </p>
    <ul className="space-y-3 text-gray-600">
      <li className="flex items-center">
        <FaCheckCircle className="text-red-600 mr-2" />
        Lorem Ipsum is simply dummy text of the printing.
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-red-600 mr-2" />
        Lorem Ipsum is simply dummy text of the printing.
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-red-600 mr-2" />
        Lorem Ipsum is simply dummy text of the printing.
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-red-600 mr-2" />
        Lorem Ipsum is simply dummy text of the printing.
      </li>
    </ul>
    <div className="mt-8 flex items-center space-x-4">
      <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700">
        GET STARTED
      </button>
      <a href="#" className="text-red-600 font-semibold">
        4 Rays AI FAQ’s →
      </a>
    </div>
    <p className="text-gray-400 mt-6 text-sm">
      Now available on all paid plans to purchase in English, Spanish<br />
      Additional languages coming soon.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1">
    <img
      src="path/to/your-laptop-image.jpg" // Replace with your laptop image path
      alt="4 Rays AI on laptop"
      className="w-full rounded-lg shadow-lg"
    />
  </div>
</div>
  )
}
