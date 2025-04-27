import React from 'react'
import './App.css'
import Button from './components/common/Button'
import Section from './components/common/SectionTitle'

function App() {
  return (
    <main>
     <Button>Get Started Today</Button>
     <Button className={"bg-amber-500"}>Get Started Today</Button>
    
     <Section gradient={"solution"}> problem & </Section>
    </main>
  )
}

export default App
