import React from 'react'
import {data} from './data'

const Testimonial = () => {
  return (
    <>
    {/* <div style={{backgroundImage :" url('./bottombg.png')"}} className='font-DM pt-4'> */}
        <div className="container mx-auto text-white/90 mt-20">
            <div className='text-center mx-auto px-4 max-w-4xl '>
                <p className='font-[700] text-[#2CBCA5] text-[15px] font-inter tracking-[1px]'>TESTIMONIALS</p>
                <h1 className='text-3xl sm:text-4xl mt-2 font-rale font-[600] px-2 '>What people say</h1>
                <p className='mt-6 text-[16px] md:text-[18px] text-balance text-gray-400 font-DM'>You can buy and sell 150+ cryptocurrencies with 20+ fiat
                <br /> currencies using bank transfer on your credit or debit card</p>
                
            </div>
            

            <div className='mx-auto flex flex-wrap items-center md:w-[100%] px-6 gap-x-5 lg:gap-x-0'>
                                
                            
                {
                    data.map((e) => {
                        const {id, name, job, review, img} = e;

                        return (
                           <div className='flex flex-col gap-2 rounded-xl mt-10 w-[35rem] p-8 mx-auto bg-gradient-to-b from-[#282930] text-[1rem] font-DM' key={id}>
                                {/* <div className='font-bold text-3xl'>*****</div> */}

                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>

                                <div className='w-[100%] text-[18px] mt-7'>{review}</div>

                                <div className='flex flex-row justify-between items-center mt-3'>
                                    <div>
                                        <p className='text-[#2CBCA5] text-[18px] font-DM font-[700]'>
                                            {name}
                                        </p>
                                        <p className='text-[16px] font-[400] text-gray-400'>
                                            {job}
                                        </p>
                                    </div>

                                    <img src={img} className='rounded-full w-14 h-14'/>
                                </div>
                           </div>
                        )
                    })   
                }
            </div>

        </div>
    {/* </div> */}
    </>
  )
}

export default Testimonial