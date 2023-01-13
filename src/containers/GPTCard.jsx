import React from 'react'
import { Feature } from '../containers'
import {featuresCard } from '../data/constants'


export default function GPTCard() {
    return (
        <section id='gpt' className='mt-[100px]'>
            <div className='bg-footerCustom card__gpt3 py-[80px] px-[70px]'>
                <Feature
                    key={featuresCard[0].id}
                    title={featuresCard[0].title}
                    text={featuresCard[0].body}
                    containerStyle={`flex justify-between`}
                    titleStyle={`text-white text-[25px] font-bold mt-[10px]`} 
                    paragraphStyle={`text-textCustom text-[18px] w-[70%]`} />
                <div className='flex justify-between items-center my-[70px]'>
                    <h1 className='gradient__text text-[35px] font-bold leading-[45px]'>
                        The possibilities are beyond <br />
                        your imagination
                    </h1>
                    <a className='capitalize text-subTextCustom hover:underline'
                    href='#library'>
                        explore the library
                    </a>
                </div>
                <div className='flex'>
                    {featuresCard.map((feature, index) => (
                        index === 0 ?
                            null
                            :
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                text={feature.body}
                                containerStyle={`w-1/3 ${index !== featuresCard.length - 1 ? "mr-[40px]" : "mr-0"}`}
                                titleStyle={`text-white text-[25px] font-bold mt-[10px]`} 
                                paragraphStyle={`text-textCustom text-[18px] w-[70%]`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
