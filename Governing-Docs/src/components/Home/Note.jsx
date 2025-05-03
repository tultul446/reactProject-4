import React from 'react'
import Container from '../common/container'
import Button from '../common/Button';


const Note = () => {
  return (
    <section className='overflow-hidden mt-[50px] sm:mt-[20px] lg:mt-[100px] xl:mt-[150px] px-2.5 '>
      <Container className='color rounded-[20px] py-[56px]pr-10  md:pr-16 pl-6 md:pl-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-2.5'>


       <div className=' text-[#FFFFFF] space-y-5  md:space-y-[30px]  '>
        
       <h1 className='text-start   text-xl md:text-[35px] lg:text-[46px] font-bold py-5 text-[35px]  md:leading-[45px] lg:leading-[64px]  max-w-full md:max-w-[450px]  lg:max-w-[566px] h-[128px]'>Ready to Simplify Your Document Management?</h1>

       <p className=' text-sm md:text-base  leading-[20px] max-w-[400px] md:max-w-[500px]  lg:max-w-[566px] h-[60px]'>Sign up today and experience the power of AI-driven legal documentation.</p>

       </div>



       <div >
        <Button className="note text-[#2D2D2D] min-w-fit mb-5">Get Started Now</Button>
       </div>








      </Container>
    </section>
  )
}

export default Note
