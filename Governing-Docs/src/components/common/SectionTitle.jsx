import React from 'react'
import GradientText from './GradientText'
import { cn } from '../../lib/utils/index'

const Section = ({ children, className, gradient }) => {
  return (
    <h1 className={cn("Space Grotesk font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]" ,
      className
    )}>
      { children }<GradientText>{ gradient }</GradientText> 
    </h1>
  )
}

export default Section
