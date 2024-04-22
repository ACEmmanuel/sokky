import React from 'react'

const Label = () => {
  return (
    <div className='w-full bg-black border border-gray-300 text-white font-bold'>
            <div className='flex flex-row flex-nowrap overflow-hidden justify-evenly gap-6 py-6 text-nowrap'>
              
                <p>Dashboard</p>
                <img src='star.png' className='img' />

                <p>Website Design</p>
                <img src='star.png' className='img' />

                <p>NFT ART</p>
                <img src='star.png' className='img' />

                <p>Development</p>
                <img src='star.png' className='img' />

                <p>Strategy</p>
                <img src='star.png' className='img' />

                <p>Motion Development</p>
                <img src='star.png' className='img' />
              
            </div>
    </div>
  )
}

export default Label