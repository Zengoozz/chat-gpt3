import React from 'react'
import { footerSections } from '../data/constants'

export default function Footer() {
    return (
        <section id='library'>
            <div className='py-[170px]'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='max-w-[850px]'>
                        <h1 className='gradient__text font-black text-[60px] leading-[70px] text-center'>
                            Do you want to step in to the future before others
                        </h1>
                    </span>
                    <button className='mt-[65px] text-white font-semibold p-5 border-[1px]'>
                        Request Early Access
                    </button>
                </div>
            </div>
            <div className='flex px-[80px] text-white'>
                <div className='max-w-[170px]'>
                    <a className=' font-black text-[45px] leading-[40px]'
                    href='#home'>
                        GPT-3
                    </a>
                    <p className='mt-[15px] text-[12px]'>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className='ml-[220px] flex'>
                    {
                        footerSections.map((sec, index) => (
                            <div className={`${index !== 0 ? "ml-[150px]" : "ml-0"} min-w-[120px]`}
                                key={sec.id}>
                                <h4 className='font-semibold text-[15px] mb-[30px] capitalize'>
                                    {sec.text}
                                </h4>
                                <div className='flex flex-col'>
                                    {sec.items.map((item, index) => (
                                        <a className='text-[10px] font-medium mb-[25px] capitalize hover:underline'
                                        href={`#${item}`}>
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p className='flex justify-center text-white mt-[35px] text-[12px]'>
                © 2021 GPT-3. All rights reserved.
            </p>
        </section>
    )
}