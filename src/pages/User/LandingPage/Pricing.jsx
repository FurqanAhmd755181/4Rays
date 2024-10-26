import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col gap-20 items-center text-center'>
        <div>
        <h3 className="text-[#BC1E2D] text-[24px]">Try on the touch</h3>
        <h3 className="text-[#BC1E2D] text-[48px] font-extrabold">
          Our <span className="text-black">Pricing plans</span>
        </h3>
        <p className="text-[#302F2F]">Start your happy journey with appratus</p>
        </div>
        
        
        <div className='flex h-[500px] justify-between w-[1110px] m-auto relative'>
            <div className='bg-white w-[380px] px-10 h-full py-20 shadow-lg rounded-3xl flex flex-col justify-between items-center' style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}>
                <h2 className='text-[40px] text-[#FFBD66] font-extrabold'>Basic</h2>
                <h2 className='text-[64px] text-[#000] font-extrabold'>$25</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div>
            <div className=' bg-white absolute w-[380px] px-10 h-full py-20 shadow-lg rounded-3xl left-1/2 -translate-x-1/2 bottom-10 flex flex-col justify-between items-center' style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}>
            <h2 className='text-[40px] text-[#BC1E2D] font-extrabold'>Advance</h2>
                <h2 className='text-[64px] text-[#000] font-extrabold'>$50</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div>
            <div className='bg-white w-[380px] px-10 h-full py-20 shadow-lg rounded-3xl flex flex-col justify-between items-center' style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}>
            <h2 className='text-[40px] text-[#FFBD66] font-extrabold'>Professional</h2>
                <h2 className='text-[64px] text-[#000] font-extrabold'>$75</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>                 
            </div>
        
        </div>
      
    </div>
  )
}

export default Pricing
