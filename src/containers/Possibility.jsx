import React from 'react'
import { possibility } from '../assets'

export default function Possibility() {
    return (
        <section id='possibility' className='ss:p-[30px] ss:mt-0 mt-[100px]'>
            <div className='flex ss:flex-row flex-col-reverse'>
                <span className='ss:w-1/2 ss:mt-0 mt-[20px]'>
                    <img src={possibility} alt="possibility VR" />
                </span>
                <div className='ss:w-1/2 max-w-[470px] ss:ml-[30px] ss:mt-[230px]'>
                    <h4 className='text-oneUseCustom ss:mb-[20px] mb-[10px]'>
                        Request Early Access to Get Started
                    </h4>
                    <h1 className='gradient__text text-[35px] font-bold leading-[45px] ss:mb-[30px] mb-[20px]'>
                        The possibilities are beyond your imagination
                    </h1>
                    <p className='text-textCustom leading-[30px] ss:mb-[30px] mb-[20px]'>
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
