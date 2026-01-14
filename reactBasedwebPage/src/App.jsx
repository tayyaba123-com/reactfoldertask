import React from 'react'
import HeroSection from './components/componentsForHeroSection/HeroSection'
import About from './components/componentsForAboutSection/About'
import Services from './components/componentsForServicesDection/Services'

const App = () => {
  return (
    <div className='app'>
      <HeroSection/>
      <About/>
      <Services/>
    </div>
  )
}

export default App