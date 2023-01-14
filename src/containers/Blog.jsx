import React from 'react'
import { Article } from '../containers'
import { articles } from '../data/constants'

export default function Blog() {
    return (
        <section id='studies'>
            <div className='flex flex-col'>
                <span>
                    <h1 className='gradient__text font-black text-[60px] leading-[70px] pb-1'>
                        A lot is happening, <br />
                        We are blogging about it.
                    </h1>
                </span>
                <div className={`grid grid-rows-2 grid-cols-[430px_1fr_1fr] gap-[50px] mt-[70px]`}>
                    {articles.map((article, index) => (
                        <div className={`${index === 0 ? "row-span-full" : ""}`}
                            key={article.id}>
                            <Article
                                id={article.id}
                                image={article.img}
                                date={article.date}
                                title={article.title}
                                textStyle={index !== 0 ? "text-[20px]" :
                                "text-[25px]" } />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
