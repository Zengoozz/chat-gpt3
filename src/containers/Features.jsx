import React from 'react'
import Feature from '../components/Feature'
import { features } from '../data/constants'

export default function Features() {
    return (
        <section id='openai' className='mt-[200px]'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='gradient__text text-[35px] font-bold leading-[45px] mb-[30px]'>
                        The Future is Now and <br />
                        You Just Need To Realize <br />
                        It. Step into Future Today <br />
                        & Make it Happen.
                    </h1>
                    <a className='text-subTextCustom hover:underline'
                        href="#CTA">
                        Request Early Access to Get Started
                    </a>
                </div>
                <div className='w-1/2'>
                    {features.map((feature, index) => (
                        <Feature
                            key={feature.id}
                            title={feature.title}
                            text={feature.body}
                            containerStyle={`flex`}
                            titleStyle={`text-white text-[20px] font-bold mt-[5px] max-w-[180px] mr-[60px]`}
                            paragraphStyle={`text-textCustom w-[70%] mt-[8px] text-[15px]`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
