import React from 'react'
import { cn } from '../../lib/utils/index'


const Button = ({children, className }) => {
  return (
    <>
    <button className={cn("py-3 lg:py-4 lg:px-[25px] sm:py-3 px-2.5 ms:px-[20PX] font-700 rounded-full text-white bg-[#34ccee] Nunito Sans mt-2 opacity-90 hover:opacity-100 hover:bg-[#059DBE] transition-all delay-150 text-xs md:text-base" ,
      className
    )}>{ children }</button>
      
    </>
  )
}

export default Button
