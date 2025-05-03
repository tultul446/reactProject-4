import React, { useState } from 'react'
import Container from '../common/container'
 import SectionTitle from '../common/SectionTitle';
import FaqCard from './faqCard';
import  { faqs }  from '../../lib/db';

const Faq = () => {
const [active, setActive] = useState(1)

const handleChange = (index) => {
  active === index ? setActive(-1) : setActive(index);
}



  return (
    <section className='mt-[50px] sm:mt-20 lg:mt-[100px]  xl:mt-[150px] relative '>
      <Container className='max-w-[982px] relative z-10'>
       
      <SectionTitle gradient='Asked Questions'> Frequently </SectionTitle>
      
      <div className='pt-10 space-y-5  '>
{faqs.map((faq, i) => <FaqCard 
key={i}
 {...faq}
 onClick={() => handleChange(i)} 
 isActive={active == i } /> 
 )} </div>
      
      
      
      </Container>
      <img src="./Vector-3.png" alt="" className='absolute -top-1  md:top-3 lg:-top-7 left-0.5 md:left-1 lg:left-2'/>
    </section>
  )
}

export default Faq;
