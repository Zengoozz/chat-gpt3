import React from 'react'
import Feature from '../components/Feature'
import { features } from '../data/constants'

export default function Features() {
    return (
        <section id='openai' className='ss:mt-[200px] mt-[100px]'>
            <div className='flex ss:flex-row flex-col ss:justify-between'>
                <div className='ss:block flex-col items-center'>
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
                <div className='ss:w-1/2 ss:mt-0 mt-[20px]'>
                    {features.map((feature, index) => (
                        <Feature
                            key={feature.id}
                            title={feature.title}
                            text={feature.body}
                            containerStyle={`flex ss:mt-0 mt-[20px]`}
                            titleStyle={`text-white text-[20px] font-bold mt-[5px] max-w-[180px] ss:mr-[60px] mr-[50px]`}
                            paragraphStyle={`text-textCustom ss:w-[70%] w-[60%] mt-[8px] text-[15px]`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
