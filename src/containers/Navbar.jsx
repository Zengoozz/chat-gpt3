import React, { useState } from 'react'

import { close, menu } from '../assets'
import { NavSections, SignButtons } from '../containers'


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
                    <NavSections marginStyle='ml-[55px]' />
                </div>

                <div className='md:block hidden'>
                    <SignButtons
                        hoverSignIn={hoverSignIn}
                        hoverSignUp={hoverSignUp}
                        signInId={'signin'}
                        signUpId={'signup'}
                        style={`text-[18px] px-12 py-4`} />
                </div>

                <div className='relative md:hidden flex'>
                    <div className='md:hidden block mr-[20px]'>
                        <SignButtons
                            hoverSignIn={hoverSignInMob}
                            hoverSignUp={hoverSignUpMob}
                            signInId={'signinMob'}
                            signUpId={'signupMob'}
                            style={`text-[15px] px-[10px] py-[5px]`} />
                    </div>

                    <button onClick={() => setToggle(prevState => !prevState)}>
                        <img className='w-[20px] h-[20px] object-contain'
                            src={toggle ? close : menu} alt={toggle ? "close" : "menu"} />
                    </button>

                    <div
                        className={`card__gpt3 absolute right-[10px] top-[40px] min-w-[150px] 
                        rounded-[10px] py-[10px] px-[20px]
                        ${toggle ? "flex flex-col items-center" : "hidden"}`}>
                        <NavSections marginStyle='mt-[15px]' />
                    </div>
                </div>

            </div>
        </section>
    )
}
