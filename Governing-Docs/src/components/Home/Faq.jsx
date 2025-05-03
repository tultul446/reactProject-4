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
    <section className='mt-[50px] sm:mt-20 lg:mt-[100px]  xl:mt-[150px]'>
      <Container className='max-w-[982px]'>
       
      <SectionTitle gradient='Asked Questions'> Frequently </SectionTitle>
      
      <div className='pt-10 space-y-5  '>
{faqs.map((faq, i) => <FaqCard 
key={i}
 {...faq}
 onClick={() => handleChange(i)} 
 isActive={active == i } /> 
 )} </div>
      
      
      
      </Container>
    </section>
  )
}

export default Faq;
