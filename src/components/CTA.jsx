import React from 'react'

export default function CTA() {
  return (
    <section id="CTA">
      <div className='my-[150px]'>
        <div className='flex items-center justify-between bar__gradient h-[100px] px-[50px] py-[80px] rounded-[10px]'>
          <div>
            <p className='text-[12px] mb-[5px]'>
              Request Early Access to Get Started
            </p>
            <h2 className='text-[25px] font-black'>
              Register today & start exploring the endless possiblities.
            </h2>
          </div>
          <button className='bg-black text-white font-bold py-[15px] px-[40px] rounded-[40px] text-[18px]'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
