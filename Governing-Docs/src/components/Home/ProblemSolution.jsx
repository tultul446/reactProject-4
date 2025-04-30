import React from 'react'
import Container from '../common/container';
import ProblemSolutionHeader from './ProblemSolutionHeader.JSX';
import ProblemSolutionCard from './ProblemSolutionCard';
import { problemSolutions } from '../../lib/db';


const ProblemSolution = () => {
  return (
    <section className='pt-32'>
     <Container>
        
        <div>
           <ProblemSolutionHeader/> 
        </div>


         

        <div className='pt-10 grid lg:grid-cols-4 grid-rows-1 md:grid-cols-2 place-items-center lg:gap-[30px] md:space-y-2.5 space-y-3'>

          {problemSolutions.map((Problem, i) =>( 
          <ProblemSolutionCard  key={i} {...Problem}/>
          ))};
         
       
        </div>
    </Container> 
    </section>
  )
}

export default ProblemSolution;
