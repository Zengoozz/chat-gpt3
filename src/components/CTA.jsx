import React from 'react'

export default function CTA() {
  return (
    <section id="CTA">
      <div className='ss:mt-[150px] mt-[50px] ss:text-left text-center'>
        <div className='flex ss:flex-row flex-col flex-1 items-center ss:justify-between
                  bar__gradient ss:p-[50px] p-[30px] rounded-[10px]'>
          <div>
            <p className='text-[12px] mb-[5px]'>
              Request Early Access to Get Started
            </p>
            <h2 className='text-[25px] font-black'>
              Register today & start exploring the endless possiblities.
            </h2>
          </div>
          <button className='bg-black text-white font-bold py-[15px] px-[40px] 
                      rounded-[40px] text-[18px] ss:mt-0 mt-[10px] border-black border-[2px]
                      hover:bg-transparent hover:text-black hover:border-[2px] hover:border-black'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
