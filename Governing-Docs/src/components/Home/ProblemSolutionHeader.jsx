import React from 'react'
import SectionTitle from '../common/SectionTitle';
const ProblemSolutionHeader = () => {
  return (
    <div className='flex flex-col sm:flex-row space-y-2 justify-center sm:justify-between items-center gap-5 '>
      <SectionTitle gradient='Solution'>Problem &  </SectionTitle>

     <div className='flex justify-center items-center gap-2.5  sm:gap-[15px] '>
        <button className='size-10  w-12 h-12 rounded-full 
         text-[#00D2FF] Button-color-h  bg-gray-100 hover:text-white/80 shadow-neutral-500 '>
            <i className="fa-solid fa-chevron-left font-bold"></i> </button>
        <button className='size-10 w-12 h-12 rounded-full 
        text-[#00D2FF]  Button-color-h bg-gray-100 hover:text-white/80 shadow-neutral-500 '>
            <i className="fa-solid fa-chevron-right font-bold"></i> </button>
     </div>

    </div>

  )
}

export default ProblemSolutionHeader;
