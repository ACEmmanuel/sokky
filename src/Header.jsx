import React from 'react'
import { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
    };

  
      
      
    return (
        <>  
            <header className="bg-[#17171ff] sticky top-0 z-10 text-white/90 font-DM text-[15px]">
                <div className="container mx-auto relative ">
                    <div className="flex flex-wrap justify-between items-center py-8 px-8 z-10 backdrop-blur">
                        
                            <h2 className="text-xl md:text-2xl font-bold">SOKKY</h2>
                        
                        <nav className="">
                            <ul className="hidden gap-10 lg:flex text-md items-center">
                                <li className="head"><a href="#hero">NFT</a></li>
                                <li className="head"><a href="#about">Crypto</a></li>
                                <li className="head"><a href="#work">About Us</a></li>
                                <li className="head"><a href="#contact">Contact Us</a></li>
                                <li className="head"><a href="#contact">Blog</a></li>
                            </ul>
                            <div className="">
                                {isMenuOpen ? <span className="lg:hidden" onClick={toggleMenu}> <i class='bx bx-x-circle text-[2rem]'></i> </span> :  <span className="lg:hidden" onClick={toggleMenu}> <i class='bx bx-menu-alt-right text-[2rem]'></i> </span>}
                                
                                {isMenuOpen && (
                                    <div className="modal text-center font-DM font-medium">
                                        <div><i class='bx bx-x-circle text-[2.4rem] absolute top-[2.4rem] right-[2.4rem]' onClick={toggleMenu}></i></div>
                                        <br />
                                        <div onClick={closeMenu}><a href="#home" className='head'>NFT</a></div>
                                        <br />
                                        <div onClick={closeMenu}><a href="#home" className='head'>Crypto</a></div>
                                        <br />
                                        <div onClick={closeMenu}><a href="#contact" className='head'>About Us</a></div>
                                        <br />
                                        <div onClick={closeMenu}><a href="#contact" className='head'>Blog</a></div>
                                        <br />
                                        <div onClick={closeMenu}><a href="#contact" className='bttn'>Buy Now</a></div>
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

