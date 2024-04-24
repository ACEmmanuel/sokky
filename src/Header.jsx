import React from 'react'
import { useState } from 'react';

const Header = () => {

    const [active, setActive] = useState(false);
      

    const toggleMenu = () => {
        setActive(!active)
    }

    // if (active){
    //     document.body.classList.add('modal-active');
    //   }else{
    //     document.body.classList.remove('modal-active');
    //   }
  
    //   const closeModal = (event) => {
    //     event.stopPropagation();
    //     toggleMenu();
    //   };
  
      
      
    return (
        <>  
            <header className="bg-[#17171ff] sticky top-0 z-10 text-white/90 font-DM text-[15px]">
                <div className="container mx-auto relative ">
                    <div className="flex flex-wrap justify-between items-center py-8 px-8 z-10 backdrop-blur">
                        
                            <h2 className="text-xl md:text-2xl"><span className="font-bold ">ACE</span>mmanuel</h2>
                        
                        <nav className="">
                            <ul className="hidden gap-10 lg:flex text-md items-center">
                                <li className="head"><a href="#hero">NFT</a></li>
                                <li className="head"><a href="#about">Crypto</a></li>
                                <li className="head"><a href="#work">About Us</a></li>
                                <li className="head"><a href="#contact">Contact Us</a></li>
                                <li className="head"><a href="#contact">Blog</a></li>
                                <li className="head bttn"><a href="#contact">Buy Now</a></li>
                            </ul>
                            <div className="">
                                {active ? <span className="lg:hidden" onClick={toggleMenu}> <i class='bx bx-x text-2xl'></i> </span> :  <span className="lg:hidden" onClick={toggleMenu}> <i class='bx bx-menu text-2xl' >=</i> </span>}
                                
                                {active && (
                                    <div className="modal text-center font-DM">
                                        <div><i class='bx bx-x-circle text-[4rem] absolute top-2 right-2' onClick={toggleMenu}>x</i></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#home" className='head'>NFT</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#home" className='head'>Crypto</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#contact" className='head'>About Us</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#contact" className='head'>Blog</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#contact" className='head bttn'>Buy Now</a></div>
                                        <br />
                                    </div>
                                )}

                            </div>
                            
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
};
export default Header

{/* <div className="hidden lg:block bg-blue-500 px-4 py-3 rounded-full text-white font-bold hover:bg-blue-300">Download CV</div> */}

{/* <header className={header ? 'bg-[#111a2ef1] text-white': 'bg-transparent sticky top-0 text-black' }></header> */}

