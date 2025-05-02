import React from 'react'
import './App.css'

import Navbar from './components/sheared/Navbar'
import Footer from './components/sheared/Footer'
import Hero from './components/Home/Hero'
import ProblemSolution from './components/Home/ProblemSolution'
import Reviews from './components/Home/Reviews'
import Partners from './components/Home/Partners'




function App() {
  return (
    <main className='font-sans bg-[url(./Vector-1.png)] min-h-svh bg-no-repeat bg-top'>

   <Navbar/>
  <Hero />
 <ProblemSolution/>
 <Reviews/>
 <Partners/>
   <Footer/> 
    </main>
  )
}

export default App
