import React from 'react'
import Container from '../common/container';
import SectionTitle from '../common/SectionTitle';
import { partners } from '../../lib/db';

const Partners = () => {
  return (
    <section className='p-[10px]'>
      <Container className='bg-[#E6F9FD] max-w-[1276px] py-[50px] px-3 rounded-[20px] '>
        <SectionTitle gradient='Partners' className='text-center'>
        Our </SectionTitle>

       {/* Card section */}
        <div className='pt-10  flex  justify-center items-center flex-wrap gap-x-[30px] gap-y-[20px]  '>

          {partners.map(({src, alt}, i) => (

<div key={i} className='w-[274px] bg-white border border-[#D6D6D6] rounded-xl h-[101px flex justify-center items-center'>

<img src={src} alt={alt} />
</div>



          ))}



         
        </div>




      </Container>
    </section>
  )
}

export default Partners
