import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstSection from './firstSection'
import Testimonial from './testimonial'
import Start from './start'
import Earn from './earn'
import Benefits from './benefits'
import Footer from './footer'
import Hero from './Hero'
import Header from './Header'
import Partner from './Partner'


// import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      {/* <Partner /> */}
      <FirstSection />
      <Earn />
      <Benefits />
      <Testimonial />
      <Start /> 
      <Footer />
    </>
  )
}

export default App;



// Heading - raleway
// Sub - inter
// Main - DM sans


// main color - #020710
// sec color - #2CBCA5

// style={{backgroundImage :" url('./bg.png')"}}

