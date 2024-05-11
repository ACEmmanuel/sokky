import React from 'react'

const Footer = () => {
  return (
   <>
    <div className='container mx-auto text-white/90 mt-7 font-DM'>
        <div className='mx-auto flex flex-col lg:flex-row items-start flex-nowrap gap-8 px-5 py-10 font-medium text-[15px]'>
            <div className='space-y-6 lg:w-[33%]'>
                <h1 className='font-bold text-[2rem]'>SOKKY</h1>
                <p className='max-w-[40rem]'>Reinventing the way of creating websites, we aim to create the most master-paced WordPress theme available on the market.</p>
            </div>

            <div className='space-y-6 lg:w-[33%]'>
                <p className='left-green relative ml-4 font-bold'>CONTACT US</p>
                <p>202 Helga Springs Rd, Crawforss, TN 38554</p>
                <p>Call Us: <span className='font-bold'>800.275.8777</span></p>
                <p>alex@company.com</p>
            </div>
            
            <div className='space-y-6 lg:w-[33%]'>
                <p className='left-green relative ml-4 font-bold'>SIGN UP FOR EMAIL UPDATES</p>
                <div className='relative'>  
                    <input className='input'/>
                    <div className='search'>Subscribe</div>
                </div>
                <p>Sign up with your email address to receive news and updates</p>
            </div>
        </div>

        <div className='w-[100%] border-t mx-auto border-slate-700 py-6'>
            <div className='flex flex-row flex-wrap gap-7 mx-auto justify-between text-[13px] px-3'>
                <div className='flex flex-row flex-wrap gap-7 lg:order-2 mx-auto md:mx-0 text-center'>
                    <a href="" className='text-nowrap'>Home</a>
                    <a href="" className='text-nowrap'>About Us</a>
                    <a href="" className='text-nowrap'>Our Team</a>
                    <a href="" className='text-nowrap'>Shop</a>
                    <a href="" className='text-nowrap'>Blog</a>
                    <a href="" className='text-nowrap'>Contact Us</a>
                </div>
                <div className='mx-auto md:mx-0 lg:order-1 border-t md:border-none md:pt-0 border-slate-700 pt-4'>
                    <p>Copyright @ 2023 Sokky. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Footer