import React from 'react'
import './App.css'

import Navbar from './components/sheared/Navbar'
import Footer from './components/sheared/Footer'
import Hero from './components/Home/Hero'




function App() {
  return (
    <main className='font-sans bg-[url(./Vector-1.png)] min-h-svh bg-no-repeat bg-top'>

   <Navbar/>
  <Hero />


   <Footer/> 
    </main>
  )
}

export default App
