import React from 'react'

const Base = () => {
  return (
    <>
      <div className='w-full bg-[#0e0822] backdrop-blur-md'>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 text-white py-8 px-14 gap-x-14 gap-y-4'>

            <div className='mx-auto'>
              <h1 className='font-bold text-3xl'>5M+</h1>
              <p className='text-[.8rem]'>Customer</p>
            </div>
            
            <div className='mx-auto'>
              <h1 className='font-bold text-3xl'>450M+</h1>
              <p className='text-[.8rem]'>Coverage</p>
            </div>

            <div className='mx-auto'>
              <h1 className='font-bold text-3xl'>22%</h1>
              <p className='text-[.8rem]'>Earnings</p>
            </div>

            <div className='mx-auto'>
              <h1 className='font-bold text-3xl'>8.03%</h1>
              <p className='text-[.8rem]'>Interest</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Base;