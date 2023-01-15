import React, { useState } from 'react'
import { close, menu } from '../assets'

import { navLinks } from '../data/constants'




export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <section className='text-white'>
            <div className='flex flex-1 items-center ss:justify-start justify-between '>
                <h1 className='font-black text-[20px] leading-8'>
                    GPT-3
                </h1>
                <div className='ss:flex hidden flex-1 ml-[70px]'>
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
                <div className='ss:block hidden'>
                    <button className='font-medium text-[18px]'>
                        Sign in
                    </button>
                    <button className='ml-[30px] font-medium text-[18px] bg-buttonSignCustom px-12 py-4 rounded-[5px]'>
                        Sign up
                    </button>
                </div>
                <div className='relative ss:hidden block'>
                    <button onClick={() => setToggle(prevState => !prevState)}>
                        <img src={toggle ? close : menu} alt="" />
                    </button>
                    <div
                        className={`card__gpt3 absolute right-[10px] top-[20px]
                        ${toggle ? "flex flex-col items-center" : "hidden"}`}>
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
                </div>

            </div>
        </section>
    )
}
