import React from 'react'
import { Feature } from '../containers'
import { features } from '../data/constants'


export default function GPTCard() {
    return (
        <section id='gpt' className='mt-[100px]'>
            <div className='bg-footerCustom card__gpt3 py-[80px] px-[70px]'>
                <Feature
                    key={features[0].id}
                    title={features[0].title}
                    text={features[0].body}
                    style={`w-[70%]`}
                    containerStyle={`flex justify-between`} />
                <div className='flex justify-between items-center my-[70px]'>
                    <h1 className='text-[35px] font-bold gradient__text leading-[45px]'>
                        The possibilities are beyond <br />
                        your imagination
                    </h1>
                    <a className='capitalize text-subTextCustom hover:underline'
                    href='#library'>
                        explore the library
                    </a>
                </div>
                <div className='flex'>
                    {features.map((feature, index) => (
                        index === 0 ?
                            null
                            :
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                text={feature.body}
                                containerStyle={`w-1/3 ${index !== features.length - 1 ? "mr-[40px]" : "mr-0"}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
