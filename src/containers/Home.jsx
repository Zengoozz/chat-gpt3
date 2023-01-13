import React from 'react'

import { ai, people } from '../assets'
import {Brands} from '../containers'

export default function Home() {
    return (
        <section id='home' >
            <div className='flex flex-1'>
                <div className='mt-[115px]'>
                    <h1 className='gradient__text font-bold text-[60px] leading-[70px]'>
                        Let’s Build Something <br />
                        amazing with GPT-3 <br />
                        OpenAI
                    </h1>
                    <p className='text-textCustom text-[20px] max-w-[550px] mt-[35px]'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <span className='flex mt-[35px]'>
                        <input className='w-[70%] bg-inputFieldCustom text-textCustom text-[20px] py-[20px] px-[30px] capitalize outline-none rounded-l-[5px]'
                            placeholder='Your Email Address'
                            type="email" />
                        <button className='bg-buttonSignCustom py-[20px] px-[30px] text-white text-[20px] font-medium rounded-r-[5px]'>
                            Get Started
                        </button>
                    </span>
                    <div className='flex items-center mt-[35px]'>
                        <img src={people} alt="people" />
                        <p className='text-white text-[12px] ml-[15px]'>
                            1,600 people requested access a visit in last 24 hours
                        </p>
                    </div>
                </div>
                <div>
                    <img className='absolute w-[700px] right-[2%]'
                        src={ai} alt="ai" />
                </div>
            </div>
            <Brands />
        </section>
    )
}
