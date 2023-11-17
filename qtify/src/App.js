import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import CardGrid from './Components/Grid/Grid'
import Section from './Components/Section/Section'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section header={"Top Albums"} />
    </div>
  )
}
