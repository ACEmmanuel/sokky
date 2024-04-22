import React from 'react'

const Earn = () => {
  return (
    <>
        <div className="text-white/90 mt-20 container mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            <div className='text-center lg:text-left mx-auto max-w-xl px-4 sm:px-8 lg:px-18'>
                <p className='font-[700] text-[#2CBCA5] text-[1rem] tracking-[1px] font-inter'>EARN CRYPTO</p>
                <h1 className='text-4xl sm:text-4xl font-[600] mt-2 font-rale'>Deposit crypto and earn interest</h1>
                {/* text-4xl sm:text-4xl font-[600] mt-2 font-rale px-2 */}
                <p className='mt-6 text-[16px] md:text-[20px] font-medium text-balance text-gray-400'>Choose from 150+ cryptocurrencies</p>

                <div className='mt-6 flex flex-col lg:flex-row gap-x-14'>
                  <div>
                    <h1 className='font-DM font-[700] text-[32px] lg:text-[42px] text-[#2CBCA5]'>15%</h1>
                    <p className='font-inter'>On cryptos</p>
                  </div>

                  <div>
                    <h1 className='font-DM font-[700] text-[32px] lg:text-[42px] text-[#2CBCA5]'>40%</h1>
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