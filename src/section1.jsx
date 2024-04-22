import React from 'react'

const Section1 = () => {
  return (
    <>
    <div className="container mx-auto w-full px-10">
        <div className='flex flex-col md:items-center md:flex-row py-10 gap-10'>
            <div className='min-w-[50%] space-y-8'>
                <h1 className='text-4xl lg:text-6xl font-medium text-nowrap'>UI/UX Design</h1>

                <p className='space-y-4'>
                    Hands-on learning via real-life innovation projects. Save Rs 8,210 On This Course. Create immersive UI via wireframes. Conduct heuristic evaluations of your UX design.
                </p>

                <ol className='space-y-3 font-medium'>
                    <li>User Interface Design</li>
                    <li>User Experience Design</li>
                    <li>Mobile Application Design</li>
                    <li>Mobile Application Design</li>
                </ol>

                <button className='btn'>LEARN MORE <span>^^</span></button>
            </div>
            <div className='min-w-[50%]'>
                <div className=' rounded-xl mt-7 bg-cover bg-no-repeat bg-center aspect-square max-w-[20rem]' style={{backgroundImage : 'url(testimonial1.png)'}}></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1