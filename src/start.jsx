import React from 'react'

const Start = () => {
  return (
    <>
    {/* <div style={{backgroundImage :" url('./bottombg.png')"}} className='py-4'> */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-20 mt-10 font-DM">
            <div className='mx-auto text-white/90 border mt-8 bg-white/10 border-gray-600 text-white rounded-md px-3 py-10 lg:px-20 flex flex-col lg:flex-row gap items-center'>
              <div className='text-3xl sm:text-4xl font-medium text-center lg:text-left lg:max-w-[40%] relative star'>
                  <h1 className='font-[700] font-rale'>
                    Let's start your crypto <span className='text-[#2CBCA5]'>investment</span> now
                  </h1>
                  <p className='text-[16px] md:text-[18px] font-medium mt-2 md:mt-0 text-gray-400'>Choose from 150+ cryptocurrencies</p>
              </div>


            <button className='btn mx-auto mt-6 lg:mx-0 lg:ml-auto font-rale'>Start now</button>
            </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Start;