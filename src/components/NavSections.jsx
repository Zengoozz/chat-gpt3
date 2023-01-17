import React from 'react'


import { navLinks } from '../data/constants'

export default function NavSections({ marginStyle, clickLink }) {
    return (
        <>
            {
                navLinks.map((link, index) => (
                    <span
                        className={`${index !== 0 ? `${marginStyle}` : "mt-0 ml-0"} hover:text-subTextCustom`}
                        key={link.id}>
                        <a onClick={clickLink}
                            className='font-medium text-[18px] hover:underline'
                            href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </span>
                ))
            }
        </>
    )
}
