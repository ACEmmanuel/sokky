import React from 'react'
import {data} from './data'

const Testimonial = () => {
  return (
    <>
    {/* <div style={{backgroundImage :" url('./bottombg.png')"}} className='font-DM pt-4'> */}
        <div className="container mx-auto text-white/90 mt-20">
            <div className='text-center mx-auto px-4 max-w-4xl '>
                <p className='font-[700] text-[#2CBCA5] text-[1rem] font-inter tracking-[1px]'>TESTIMONIALS</p>
                <h1 className='text-3xl sm:text-4xl mt-2 font-rale font-[600] px-2'>What people say</h1>
                <p className='mt-6 text-[16px] md:text-[18px] font-medium text-balance text-gray-400'>You can buy and sell 150+ cryptocurrencies with 20+ fiat
                <br /> currencies using bank transfer on your credit or debit card</p>
                
            </div>
            

            <div className='mx-auto flex flex-wrap items-center md:w-[100%] px-4 gap-x-5 lg:gap-x-0'>
                                
                            
                {
                    data.map((e) => {
                        const {id, name, job, review, img} = e;

                        return (
                           <div className='flex flex-col gap-2 rounded-xl mt-10 w-[35rem] p-8 mx-auto bg-gradient-to-b from-[#282930] text-[1rem] font-medium' key={id}>
                                <div className='font-bold text-3xl'>*****</div>
                                <div className='w-[100%] text-[16px]'>{review}</div>

                                <div className='flex flex-row justify-between items-center mt-3'>
                                    <div>
                                        <p className='text-[#2CBCA5] text-[20px] font-DM font-[700]'>
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