import React from 'react'

import { brandsLogos } from '../data/constants'


export default function Brands() {
    return (
        <section className='ss:mt-[60px] mt-[30px]'>
            <div className='flex flex-wrap ss:justify-center justify-around'>
                {brandsLogos.map((brand, index) => (
                    <span className={`${index !== 0 ? "ss:ml-[50px] ml-0" : "ml-0"} ss:mt-0 mt-[30px]`}
                        key={brand.id}>
                        <img src={brand.img} alt={brand.id} />
                    </span>
                ))}
            </div>
        </section>
    )
}
