import React from 'react'

import { brandsLogos } from '../data/constants'


export default function Brands() {
    return (
        <section className='mt-[60px]'>
            <div className='flex flex-1 justify-center'>
                {brandsLogos.map((brand,index)=> (
                    <span className={`${index !== 0 ? "ml-[50px]" : "ml-0"}`} 
                    key={brand.id}>
                        <img src={brand.img} alt={brand.id} />
                    </span>
                ))}
            </div>
        </section>
    )
}
