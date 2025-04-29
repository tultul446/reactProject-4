import React, { useState } from 'react'
import Container from '../common/container';
import Logo from './Logo';
import Button from '../common/Button'
import { navItems } from '../../lib/db';
import MobileMenu from './mobileMenu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);


  return (
    <nav className='py-3 ml-7 mr-7'>
    <Container>
        <div className='flex justify-between items-center gap-2.5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full '>
           <Logo/>
            <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4 text-400'>
               {navItems.map(({label, link}, i) => (
            <a href={link} key={i}> 
               <p className='text-gray-600/50 text-sm xl:text-base hover:text-[#00D2FF] transition-colors duration-150' >
                {label} </p>
           </a>
            ))}
              
            
            

            </div>
            <div className='flex justify-center items-center gap-2.5'>
            <button className='lg:hidden block'
            onClick={toggleMenu}>

                <div className='space-y-1'>
              <span className='block w-6 h-0.5 bg-black '></span>
              <span className='block w-6 h-0.5 bg-black '></span>
              <span className='block w-6 h-0.5 bg-black '></span>
              </div>
              </button> 
               
                <Button>Get Started Today</Button>
            </div>
        </div>
       {isMenuOpen && <MobileMenu toggleMenu={toggleMenu}/>  }
    </Container>
      
    </nav>
  )
}

export default Navbar;






