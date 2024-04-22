import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='relative h-full'>
        <div className="text-white/90 mt-20 container mx-auto">

          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-5'>


            {/* Section one */}
            <div className='text-center lg:text-left mx-auto max-w-xl px-4 sm:px-8 lg:px-18 order-2 lg:order-1'>
                <p className='font-[700] text-[1rem] tracking-[1px] flex flex-row gap-2 w-[12rem] mx-auto lg:mx-0'>
                    <img src='discount.png' className='w-6'/>
                    GET <span className='text-[#797A80]'>25%</span> OF NOW
                </p>
                <h1 className='text-5xl lg:text-7xl font-[500] mt-2'>Make your life easier with crypto</h1>
                <button className='btn mx-auto mt-16 lg:mx-0 lg:ml-auto text-[1.1rem] font-rale'>Start now</button>

                <div className='mt-16 flex flex-col lg:flex-row gap-y-4 gap-x-6 mx-auto items-center'>
                  <div className='flex flex-row gap-3 items-center justify-center'>
                    <h1 className='font-DM font-[700] text-[32px] lg:text-[42px]'>2k+</h1>
                    <p className='font-DM text-nowrap font-medium'>ACTIVE USERS</p>
                  </div>

                  <div className='w-[1px] h-8 bg-white/70 hidden lg:flex'></div>

                  <div className='flex flex-row gap-3 items-center justify-center'>
                    <h1 className='font-DM font-[700] text-[32px] lg:text-[42px]'>20+</h1>
                    <p className='font-DM text-nowrap font-medium'>WALLET TYPES</p>
                  </div>
                </div> 
            </div>
            
            {/* Section two */}

            <div className='relative w-full items-center justify-start -mt-10 order-1 lg:order-2'>
                <img src='./card.png' className='hero right-0 w-[80%] h-[80%] max-w-[35rem] mx-auto '/>
            </div>
          </div>
        </div>
          <img src='ball.png' className='absolute w-[1.5rem] lg:w-[2.5rem] right-0 top-[25rem] '/>
          <img src='ball.png' className='absolute w-[2rem] lg:w-[3rem] right-[29rem] top-[1rem] '/>
          <img src='whiteball.png' className='absolute w-[1rem] lg:w-[2rem] right-[10rem] top-[3rem]'/>
          <img src='./hand.png' className='hero-img ' />
          {/* hidden lg:block */}

    </div>
    </>
  )
}

export default Hero;