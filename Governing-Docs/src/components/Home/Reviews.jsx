import React from 'react'
import SectionTitle from '../common/SectionTitle';
import Container from '../common/container';
import ReviewCard from './ReviewCard';
import { reviews  } from '../../lib/db';
import { useState } from 'react';
import { cn } from '../../lib/utils';
const Reviews = () => {

const [active, setActive] = useState(1);

const activeReview = reviews[active]; 







  return (
    <section className='my-[50px] sm:my-20 md:my-[80px]  lg:my-[100px] xl:my-[150px] bg-[#F6F6F6] py-10   lg:py-20 '>
     
     <Container>
    <SectionTitle gradient ='Our Client' className='text-center'> Reviews From </SectionTitle> 

    <div className='pt-10  flex flex-col md:flex-row justify-center items-center gap-10  lg:gap-20 xl:gap-[93px]'>
       
<div className='flex w-full gap-5'>

        {/* review line */}

<div className='bg-[#E2DED8] w-[5px] rounded-[20px] '>
<div className='space-y-[15px]'>



{Array.from(Array(3).keys()).map((el) => (
       <div
       key={el}
       className={cn('w-[5px] h-[92px]  rounded-[20px]  bg-transparent', active === el && 'color' 

       )} 
       />  
     ))} 


 
 
 </div>
</div>


     {/* review list */}

  <div className='space-y-[15px] flex-grow'>
    {reviews.map((review, i) => (
     <ReviewCard key={i}  active={ active == i } onClick={() => setActive(i)}   {...review}/>
    ))}
 </div>


 </div>

  {/* review details    */}
      <div className='space-y-[30px] w-full'>
       <h3 className='font-bold text-[30px]'>{activeReview.review.title}</h3>
      <div className='flex justify-start items-center'>

      {Array.from(Array(1)).map(( i) => (
      <img src={activeReview.review.star} alt="name" key={i}/>
      )

      )}

     

      </div>
      <p className='text-base text-[#666666] max-w-[500px]'>{activeReview.review.details}</p>


      </div>


    </div>

    </Container>
    </section>
  )
}

export default Reviews;
