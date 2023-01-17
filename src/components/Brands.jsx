import React from 'react'

import { brandsLogos } from '../data/constants'


export default function Brands() {
    return (
        <section className='ss:mt-[60px] mt-[30px]'>
            <div className='ss:flex hidden flex-wrap justify-center'>
                {brandsLogos.map((brand, index) => (
                    <span className={`${index !== 0 ? "ml-[50px]" : "ml-0"}`}
                        key={brand.id}>
                        <img src={brand.img} alt={brand.id} />
                    </span>
                ))}
            </div>
            <div className='ss:hidden flex flex-wrap justify-between'>
                {brandsLogos.map((brand, index) => (
                    <span className={`${index === 2 ? "w-full flex justify-center": ""} mt-[30px]`}
                        key={brand.id}>
                        <img src={brand.img} alt={brand.id} />
                    </span>
                ))}
            </div>
        </section>
    )
}
