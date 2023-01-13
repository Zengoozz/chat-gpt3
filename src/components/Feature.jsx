import React from 'react'

export default function Feature({title, text, paragraphStyle, containerStyle, titleStyle}) {
    return (
        <div className={`${containerStyle}`}>
            <div className='mb-[40px]'>
                <div className='bar__gradient h-[3px] w-[40px]'/>
                <h1 className={titleStyle}>
                   {title}
                </h1>
            </div>
            <p className={paragraphStyle}>
                {text}
            </p>
        </div>
    )
}
