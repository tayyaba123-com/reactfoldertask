import React from 'react'
import ServiceLeftPart from './ServiceLeftPart'
import ServicesCenterPart from './ServicesCenterPart'
import ServucesRightPart from './ServucesRightPart'

const Services = () => {
  return (
    <div className='Services-section'> 
      <ServiceLeftPart/>
      <ServicesCenterPart/>
      <ServucesRightPart/>
    </div>
  )
}

export default Services