import React, { useState } from 'react'
import { close, menu } from '../assets'

import { navLinks } from '../data/constants'




export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    const hoverSignIn = () => {
        const signinBtn = document.getElementById('signin');
        const signupBtn = document.getElementById('signup');
        signupBtn.classList.remove('bg-buttonSignCustom')
        signinBtn.classList.add('bg-buttonSignCustom')
    }

    const hoverSignUp = () => {
        const signinBtn = document.getElementById('signin');
        const signupBtn = document.getElementById('signup');
        signinBtn.classList.remove('bg-buttonSignCustom')
        signupBtn.classList.add('bg-buttonSignCustom')
    }

    const hoverSignInMob = () => {
        const signinBtn = document.getElementById('signinMob');
        const signupBtn = document.getElementById('signupMob');
        signupBtn.classList.remove('bg-buttonSignCustom')
        signinBtn.classList.add('bg-buttonSignCustom')
    }

    const hoverSignUpMob = () => {
        const signinBtn = document.getElementById('signinMob');
        const signupBtn = document.getElementById('signupMob');
        signinBtn.classList.remove('bg-buttonSignCustom')
        signupBtn.classList.add('bg-buttonSignCustom')
    }

    return (
        <section className='text-white'>
            <div className='flex flex-1 items-center md:justify-start justify-between '>
                <h1 className='font-black text-[20px] leading-8'>
                    GPT-3
                </h1>
                <div className='md:flex hidden flex-1 ml-[70px]'>
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
                <div className='md:block hidden'>
                    <button onMouseOver={hoverSignIn}
                        id='signin'
                        className='font-medium text-[18px] px-12 py-4 rounded-[5px]'>
                        Sign in
                    </button>
                    <button onMouseOver={hoverSignUp}
                        id='signup'
                        className='ml-[30px] font-medium text-[18px] bg-buttonSignCustom px-12 py-4 rounded-[5px]'>
                        Sign up
                    </button>
                </div>
                <div className='relative md:hidden flex'>
                    <div className='md:hidden block mr-[20px]'>
                        <button onMouseOver={hoverSignInMob}
                            id='signinMob'
                            className='font-medium text-[15px] px-[10px] py-[5px] rounded-[5px]'>
                            Sign in
                        </button>
                        <button onMouseOver={hoverSignUpMob}
                            id='signupMob'
                            className='ml-[20px] font-medium text-[15px] bg-buttonSignCustom 
                            px-[10px] py-[5px] rounded-[5px]'>
                            Sign up
                        </button>
                    </div>
                    <button onClick={() => setToggle(prevState => !prevState)}>
                        <img className='w-[20px] h-[20px] object-contain'
                            src={toggle ? close : menu} alt={toggle ? "close" : "menu"} />
                    </button>
                    <div
                        className={`card__gpt3 absolute right-[10px] top-[40px] min-w-[150px] 
                        rounded-[10px] py-[10px] px-[20px]
                        ${toggle ? "flex flex-col items-center" : "hidden"}`}>
                        {
                            navLinks.map((link, index) => (
                                <span
                                    className={`${index !== 0 ? "mt-[15px]" : "mt-0"} hover:text-subTextCustom`}
                                    key={link.id}>
                                    <a className='font-medium text-[18px]'
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
