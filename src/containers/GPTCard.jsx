import React from 'react'
import { Feature } from '../containers'
import {featuresCard } from '../data/constants'


export default function GPTCard() {
    return (
        <section id='gpt' className='mt-[100px]'>
            <div className='bg-footerCustom card__gpt3 ss:py-[80px] ss:px-[70px] p-[40px]'>
                <Feature
                    key={featuresCard[0].id}
                    title={featuresCard[0].title}
                    text={featuresCard[0].body}
                    containerStyle={`flex sm:flex-row flex-col justify-between`}
                    titleStyle={`text-white text-[25px] font-bold mt-[10px]`} 
                    paragraphStyle={`text-textCustom text-[18px] ss:w-[70%]`} />
                <div className='flex ss:flex-row flex-col justify-between items-center ss:my-[70px] my-[30px]'>
                    <h1 className='gradient__text text-[35px] font-bold leading-[45px]'>
                        The possibilities are beyond <br />
                        your imagination
                    </h1>
                    <a className='capitalize text-subTextCustom ss:mt-0 mt-[10px] hover:underline'
                    href='#library'>
                        explore the library
                    </a>
                </div>
                <div className='flex ss:flex-row flex-col'>
                    {featuresCard.map((feature, index) => (
                        index === 0 ?
                            null
                            :
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                text={feature.body}
                                containerStyle={`ss:w-1/3 ${index !== featuresCard.length - 1 ? "mr-[40px] ss:mb-0 mb-[20px]" : "mr-0"}`}
                                titleStyle={`text-white text-[25px] font-bold mt-[10px]`} 
                                paragraphStyle={`text-textCustom text-[18px] ss:w-[70%]`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
