import React from 'react'

import { ai, people } from '../assets'
import { Brands } from '../containers'

export default function Home() {
    return (
        <section id='home' >
            <div className='flex flex-1 ss:flex-row flex-col'>
                <div className='ss:mt-[115px] mt-[50px]'>
                    <h1 className='gradient__text font-bold text-[60px] leading-[70px]'>
                        Let’s Build Something <br />
                        amazing with GPT-3 <br />
                        OpenAI
                    </h1>
                    <p className='text-textCustom text-[20px] max-w-[550px] mt-[35px]'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <span className='flex mt-[35px]'>
                        <input
                            className='placeholder:text-textCustom w-[70%] bg-inputFieldCustom text-textCustom 
                                ss:text-[20px] text-[18px] ss:py-[20px] py-[5px] ss:px-[30px] px-[20px] outline-none rounded-l-[5px]'
                            placeholder='Your Email Address'
                            type="email" />
                        <button className='bg-buttonSignCustom ss:py-[20px] py-[5px] ss:px-[30px] px-[20px] text-white 
                                    ss:text-[20px] text-[18px] font-medium rounded-r-[5px]'>
                            Get Started
                        </button>
                    </span>
                    <div className='flex ss:flex-row flex-col items-center ss:mb-0 mb-[10px] mt-[35px]'>
                        <img src={people} alt="people" />
                        <p className='text-white text-[12px] ss:mt-0 mt-[10px] ml-[15px]'>
                            1,600 people requested access a visit in last 24 hours
                        </p>
                    </div>
                </div>
                <div>
                    <img className='ss:absolute static w-[700px] ss:right-[2%]'
                        src={ai} alt="ai" />
                </div>
            </div>
            <Brands />
        </section>
    )
}
