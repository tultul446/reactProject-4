import React from 'react'

import { cn } from '../../lib/utils';




const ReviewCard = ({ image, name, type, active, onClick }) => {
  return (
    <button
    onClick={ onClick } 
    className={ cn(
      'inline-flex justify-normal items-center border border-sky-400/50 rounded-[20px] w-full lg:w-[400px] xl:w-[491px] h-[92px] py-[1px] px-5 gap-[13px]',
       active  && 'color' )}>


    <img src={image} alt={name} className='rounded-full' />

   <div className={cn('font-semibold text-base text-[#666666]', active && 'text-white')}>
       <h4>{ name }</h4>
       <p>{ type }</p>
   </div>


   </button>

  )
}

export default ReviewCard
