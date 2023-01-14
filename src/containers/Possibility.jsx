import React from 'react'
import { possibility } from '../assets'

export default function Possibility() {
    return (
        <section id='possibility' className='p-[30px]'>
            <div className='flex'>
                <span className='w-1/2'>
                    <img src={possibility} alt="possibility VR" />
                </span>
                <div className='w-1/2 max-w-[470px] ml-[30px] mt-[230px]'>
                    <h4 className='text-oneUseCustom mb-[20px]'>
                        Request Early Access to Get Started
                    </h4>
                    <h1 className='gradient__text text-[35px] font-bold leading-[45px] mb-[30px]'>
                        The possibilities are beyond your imagination
                    </h1>
                    <p className='text-textCustom leading-[30px] mb-[30px]'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <a  className='text-subTextCustom hover:underline'
                        href='#CTA'>
                        Request Early Access to Get Started
                    </a>
                </div>
            </div>
        </section>
    )
}
