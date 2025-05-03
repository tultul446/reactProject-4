import React from 'react'

const FaqCard = ({ q, a, onClick, isActive }) => {
  return (
    <div className='border border-[#d9f6fc] shadow-lg shadow-[#bff3ff] faq rounded-[20px] py-6  px-[30px] '>


          <button onClick ={onClick}  className='inline-flex
          justify-between items-center gap-5 w-full'>
            <h1 className='font-bold text-[18px] md:text-[20px] xl:text-[26px] leading-6 sm:leading-7  md:leading-8   lg:leading-[36px] text-[#2D2D2D] text-start '>{q}
            </h1>

            <div className=''>
            <i className="fa-solid fa-chevron-up text-[#00D2FF]" ></i>
          </div>
          </button>
        {isActive && 
               <p className='text-sm lg:text-base text-[#666666] pt-5'>
              {a}   
               </p>
        }


     
        </div>
  )
}

export default FaqCard
