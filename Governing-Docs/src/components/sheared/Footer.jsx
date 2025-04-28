import React from 'react'
import Container from '../common/container';
import { navItems } from '../../lib/db';


const Footer = () => {
  return (
    <footer className='pt-5 lg:pt-24'>
      <Container>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5'>
          <h1 className='font-space-grotesk  sm:text-2xl text-xl lg:text-4xl font-bold'>Ai GoverningDocs</h1>

         <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'  >
               {navItems.map(({label, link}, i) => (
                      <a href={link} key={i}> 
                         <p className='text-gray-600 text-sm xl:text-base hover:text-[#00D2FF] transition-colors duration-150' >
                          {label} </p>
                     </a>
                      ))}
         </div>

            <div className='flex justify-center items-center gap-2.5'>
               {
                socialIcon.map(({img, url} ) => (
                 <a href={url} target="_blank" rel="noopener noreferrer">

               <img src={ img } alt="Social icon" className="size-[36px]"/>
                 </a>
                
                ))
               }
            </div>
        </div>


        <div className='footer-border-color border-t border-transparent mt-5 md:mt-[50px] lg:mt-[106px]  '>
          <p className='text-lg text-center leading-[18px] text-[#111111] py-5'>Ai GoverningDocs 2024. All Rights Reserved.
           </p>
          </div>


      </Container>
    </footer>
  )
}

export default Footer;




const socialIcon = [
  {
    img:'./img1.png',
    url:'https://github.com/tultul446/reactProject-4/tree/main'
  },
  {
    img:'./img2.png',
    url:'https://github.com/tultul446/reactProject-4/tree/main'
  },
  {
    img:'./img3.png',
    url:'https://github.com/tultul446/reactProject-4/tree/main'
  },
  {
    img:'./img4.png',
    url:'https://github.com/tultul446'
  }

];





