import React from 'react'
import Card from './card';

const Benefits = () => {
  return (
    <>
        <>
        <div className="text-white/90 mt-20 container mx-auto font-inter">
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
            <div className='text-center lg:text-left mx-auto max-w-xl px-4 sm:px-8 lg:px-18'>
                <p className='text-[#2CBCA5] text-[1rem] font-[700] tracking-[1px] font-inter'>BENEFITS</p>
                <h1 className='text-4xl sm:text-4xl font-[600] mt-2 font-rale'>Make crypto work harder for you</h1>
                <p className='mt-6 text-[16px] md:text-[20px] text-balance text-gray-400'>Choose from 150+ cryptocurrencies</p>

                <div className='mt-6 '>
                <img src='./stat.png'/>
                </div> 
            </div>
            

            <div className='mx-auto px-3 text-center lg:text-left gap-x-5 mt-7 sm:px-8 lg:px-18 flex flex-col'>
              <h5 className='text-[16px] md:text-[18px] font-medium text-[#B3B4B7]'>You can buy and sell 150+ cryptocurrencies with 20+ fiat currencies using transfers on your credit or debit card</h5>

              <Card />
              
                
              
            </div>
          </div>
        </div>
        </>
    </>
  )
}

export default Benefits;