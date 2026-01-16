import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Card = () => {
  return (
    <div className=' flex flex-col w-70 rounded-2xl bg-[#FDFDFD]
     border-b-yellow-700 border p-2 gap-3 
     '>
        <Top/>

        <Bottom/>
    </div>
  )
}

export default Card