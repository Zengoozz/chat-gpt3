import React from 'react'

export default function Feature({title, text, style, containerStyle}) {
    return (
        <div className={`${containerStyle}`}>
            <div className='mb-[40px]'>
                <div className='bar__gradient h-[3px] w-[40px] mb-[10px]'/>
                <h1 className='text-white text-[25px] font-bold'>
                   {title}
                </h1>
            </div>
            <p className={`text-textCustom text-[18px] ${style}`}>
                {text}
            </p>
        </div>
    )
}
