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


         

        <div className='pt-10 grid grid-cols-4 place-items-center gap-[30px] '>

          {problemSolutions.map((Problem, i) =>( 
          <ProblemSolutionCard  key={i} {...Problem}/>
          ))};
         
       
        </div>
    </Container> 
    </section>
  )
}

export default ProblemSolution;
