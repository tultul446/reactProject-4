import React from 'react'
import Logo from './Logo';
import { navItems } from '../../lib/db';

const MobileMenu = ({toggleMenu}) => {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-hidden'>
     
     <div className='flex justify-between items-center pb-6'>
     <Logo/>
     <button className='text-black text-2xl self-end' aria-label='Close Menu' onClick={toggleMenu}>
     <i class="fa-solid fa-xmark"></i>
     </button>

     </div>
     <div className='space-y-4'>
        {
            navItems.map(({label, link}, i) => (
            <a href={link} key={i}
            className='block text-lg text-gray-700 hover:text-[#059DBE] transition-colors duration-150 '
            >{label}</a>
        ))}
     </div>

    </div>
  )
}

export default MobileMenu;
