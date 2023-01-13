import React from 'react'

import { navLinks } from '../data/constants'




export default function Navbar() {
    return (
        <section className='text-white'>
            <div className='flex flex-1 items-center'>
                <h1 className='font-black text-[20px] leading-8'>
                    GPT-3
                </h1>
                <div className='flex flex-1 ml-[70px]'>
                    {
                        navLinks.map((link, index) => (
                            <span className={`${index !== 0 ? "ml-[55px]" : "ml-0"}`}
                                key={link.id}>
                                <a className='font-medium text-[18px] hover:underline'
                                    href={`#${link.id}`}>
                                    {link.title}
                                </a>
                            </span>
                        ))
                    }
                </div>
                <div>
                    <button className='font-medium text-[18px]'>
                        Sign in
                    </button>
                    <button className='ml-[30px] font-medium text-[18px] bg-buttonSignCustom px-12 py-4 rounded-[5px]'>
                        Sign up
                    </button>
                </div>
            </div>
        </section>
    )
}
