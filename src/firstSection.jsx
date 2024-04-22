import React from 'react'

const FirstSection = () => {
  return (
    <>
        <div className="w-full container mx-auto text-white/90 mt-20 font-DM">
            <div className='text-center'>
                <p className='font-[700] text-[#2CBCA5] text-[1rem] font-inter tracking-[1px]'>BUY, STORE, SELL</p>
                <h1 className='text-4xl sm:text-4xl font-[600] mt-2 font-rale '>Manage your transactions in one place</h1>
                <p className='mt-3 text-[16px] md:text-[18px] font-medium text-balance text-gray-400'>You can buy and sell 150+ cryptocurrencies with 20+ fiat <br /> currencies using bank transfers on your credit or debit card</p>
            </div>

            <div className='w-full px-4 sm:px-8 lg:px-20 mt-7'>
              <img src='transact.png' className='mx-auto bg-no-repeat bg-cover'/>
            </div>
        </div>
    </>
  )
}

export default FirstSection;