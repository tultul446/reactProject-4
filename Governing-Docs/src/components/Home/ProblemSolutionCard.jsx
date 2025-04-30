import React from 'react'

const ProblemSolutionCard = ({ img, title, des1, des2 }) => {
  return (
    <div className='hover:text-[#FFF] w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 group transition-colors duration-200 card primary '>

    <div className='size-[58px]'>
     <img src={img} alt={title} />
    </div>
      <h1 className='font-bold text-lg text-[#2D2D2D] leading-none group-hover:text-[#FFFFFF]'>{ title }</h1>
    
     
     <div className='text-[#666666] space-y-2.5 group-hover:text-white'>
   <p>{des1}</p>

  {des2 && <p>{des2}</p> }
   </div>

 </div>
 
  )
}

export default ProblemSolutionCard
