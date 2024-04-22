import React from 'react'
import { cards } from './data';

const Card = () => {
    return (
        <div>
        {
            cards.map((e) => {
                const {id, name, about, img} = e;
                
                return (
                    <>
                    <div className='w-full bg-gradient-to-b from-[#282930] rounded-xl flex flex-col justify-center items-center lg:flex-row lg:items-center py-8 px-8 gap-4 lg:gap-x-8 mt-10 max-w-[35rem] mx-auto' key={id}>

                            <img src={img} className='w-[4.5rem] lg:w-[3rem] '/>

                            <div className='space-y-4'>
                                <p className='text-[#2CBCA5] text-[20px] lg:text-[25px] font-medium'>{name}</p>
                                <p>{about}</p>
                            </div>
                    </div>
                    </>
                    )
            })
        }
        </div>
    )
}

export default Card;