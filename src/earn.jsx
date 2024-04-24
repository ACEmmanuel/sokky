import React from 'react'

const Earn = () => {
  return (
    <>
        <div className="text-white/90 mt-20 container mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            <div className='text-center lg:text-left mx-auto max-w-xl px-4 sm:px-8 lg:px-18'>
                <p className='font-[700] text-[#2CBCA5] text-[15px] tracking-[1px] font-inter'>EARN CRYPTO</p>
                <h1 className='text-[2rem] sm:text-4xl font-[600] mt-4 font-rale relative'>Deposit crypto and earn interest
                
                <img src='./sparkle.png' className='absolute size-[1.4rem] right-5 bottom-0'/>
                
                </h1>

                <p className='text-[16px] md:text-[18px] text-balance text-gray-400 font-DM mt-3'>Choose from 150+ cryptocurrencies</p>

                <div className='mt-6 flex flex-col lg:flex-row gap-x-14 gap-y-4'>
                  <div className='-space-y-1'>
                    <h1 className='font-DM font-[500] text-[3.3rem] lg:text-[3.5rem] text-[#2CBCA5]'>15%</h1>
                    <p className='font-inter'>On cryptos</p>
                  </div>

                  <div className='-space-y-1'>
                    <h1 className='font-DM font-[500] text-[3.3rem] lg:text-[3.5rem] text-[#2CBCA5]'>40%</h1>
                    <p className='font-inter'>On stablecoins</p>
                  </div>
                </div> 
            </div>
            

            <div className='mx-auto items-center px-3 gap-x-5 mt-7 sm:px-8 lg:px-18'>
                <img src='./widget.png' />
            </div>
          </div>
        </div>
    </>
  )
}

export default Earn