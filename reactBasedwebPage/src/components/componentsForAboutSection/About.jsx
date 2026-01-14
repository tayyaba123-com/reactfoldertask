import React from 'react'
import AboutTop from './AboutTop'
import AboutCenter from './AboutCenter'
import Aboutbottom from './Aboutbottom'

const About = () => {
  return (
    <div className='about-section'>
      <AboutTop/>
      <AboutCenter/>
      <Aboutbottom/>
    </div>
  )
}

export default About