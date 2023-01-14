import React from 'react'

export default function Article({ id,image, date, title, textStyle }) {
    return (
        <div className='flex flex-col h-full'>
            <img className=''
                src={image} alt="blog" />
            <div className='bg-articleBgCustom text-white h-full flex flex-col justify-between items-start p-[20px]'>
                <span className='mb-[35px]'>
                    <p className='text-[12px] font-semibold mb-[5px]'>
                        {date}
                    </p>
                    <h1 className={`font-black ${textStyle}`}>
                        {title}
                    </h1>
                </span>
                <a className='font-semibold hover:underline'
                href={`#${id}`}>
                    Read Full Article
                </a>
            </div>
        </div>
    )
}
