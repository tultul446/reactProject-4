import React from 'react'
import { cn } from '../../lib/utils/index'


const Button = ({children, className }) => {
  return (
    <>
    <button className={cn("py-3 lg:py-4 lg:px-[25px] sm:py-3 px-2.5 ms:px-[20PX] font-700 rounded-full text-white Nunito Sans mt-2 opacity-90 hover:opacity-100  transition-all delay-75 text-xs md:text-base Button-color" ,
      className
    )}>{ children }</button>
      
    </>
  )
}

export default Button
