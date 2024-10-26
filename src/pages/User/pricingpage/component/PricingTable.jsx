import React from 'react'

export const PricingTable = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
    <h1 className="text-5xl font-bold text-center mb-8 " >
      Make <span className="text-[#C10A28]">teamwork</span> more productive
    </h1>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      
      {/* Basic Plan */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 border border-gray-300">
        <h2 className="text-xl font-semibold text-gray-800">Basic</h2>
        <p className="text-gray-500 mb-4">The quickest and easiest way to try</p>
        <p className="text-4xl font-bold mb-4">$25 <span className="text-base font-normal">USD/mo</span></p>
        <button className="bg-transparent text-[#BC1E2D] border border-[#BC1E2D] py-2 px-4 rounded-lg w-full font-semibold mb-6 hover:bg-red-500 hover:text-white">
          GET STARTED
        </button>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✓ 90 days of message history</li>
          <li>✓ 10 app integrations</li>
          <li>✓ 1:1 audio and video meetings</li>
          <li>✓ 1:1 messages with people outside your organization</li>
          <li>✓ 1 workspace</li>
          <li className="text-gray-300">Unlimited workflows</li>
          <li className="text-gray-300">Collaborate on lists and documents</li>
          <li className="text-gray-300">User provisioning and deprovisioning</li>
          <li className="text-gray-300">SAML-based single sign-on</li>
          <li className="text-gray-300">Data exports for all messages</li>
          <li className="text-gray-300">Support for data loss prevention</li>
          <li className="text-gray-300">HIPAA-compliant message and file collaboration</li>
          <li className="text-gray-300">Built-in employee directory</li>
        </ul>
      </div>

      {/* Advance Plan */}
      <div className="bg-white shadow-lg rounded-lg  w-full md:w-1/3 border border-gray-300">
      <div className='bg-[#BC1E2D] rounded-t-lg  mt-[-18px]    h-8 flex justify-center items-center text-[22px] text-white  '>Best value</div>
<div className='p-6'>
        <h2 className="text-xl font-semibold text-gray-800">Advance</h2>
        <p className="text-gray-500 mb-4">More power for small teams who want better collaboration</p>
        <p className="text-4xl font-bold mb-4">$50 <span className="text-base font-normal">USD/mo</span></p>
        <button className="bg-[#BC1E2D] text-white py-2 px-4 rounded-lg w-full font-semibold mb-6 hover:bg-red-600">
          GET STARTED
        </button>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✓ 90 days of message history</li>
          <li>✓ 10 app integrations</li>
          <li>✓ 1:1 audio and video meetings</li>
          <li>✓ 1:1 messages with people outside your organization</li>
          <li>✓ 1 workspace</li>
          <li className="text-gray-300">Unlimited workflows</li>
          <li className="text-gray-300">Collaborate on lists and documents</li>
          <li className="text-gray-300">User provisioning and deprovisioning</li>
          <li className="text-gray-300">SAML-based single sign-on</li>
          <li className="text-gray-300">Data exports for all messages</li>
          <li className="text-gray-300">Support for data loss prevention</li>
          <li className="text-gray-300">HIPAA-compliant message and file collaboration</li>
          <li className="text-gray-300">Built-in employee directory</li>
        </ul>
      </div>
      </div>
      {/* Professional Plan */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 border border-gray-300">
        <h2 className="text-xl font-semibold text-gray-800">Professional</h2>
        <p className="text-gray-500 mb-4">Scale your business, increase productivity, and keep your teams connected</p>
        <p className="text-4xl font-bold mb-4">$75 <span className="text-base font-normal">USD/mo</span></p>
        <button className="bg-transparent text-[#BC1E2D] border border-[#BC1E2D] py-2 px-4 rounded-lg w-full font-semibold mb-6 hover:bg-red-500 hover:text-white">
          GET STARTED
        </button>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✓ 90 days of message history</li>
          <li>✓ 10 app integrations</li>
          <li>✓ 1:1 audio and video meetings</li>
          <li>✓ 1:1 messages with people outside your organization</li>
          <li>✓ 1 workspace</li>
          <li className="text-gray-300">Unlimited workflows</li>
          <li className="text-gray-300">Collaborate on lists and documents</li>
          <li className="text-gray-300">User provisioning and deprovisioning</li>
          <li className="text-gray-300">SAML-based single sign-on</li>
          <li className="text-gray-300">Data exports for all messages</li>
          <li className="text-gray-300">Support for data loss prevention</li>
          <li className="text-gray-300">HIPAA-compliant message and file collaboration</li>
          <li className="text-gray-300">Built-in employee directory</li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}
