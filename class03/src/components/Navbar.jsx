import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='h-20 w-full items-center flex p-4 justify-between  rounded-2xl text-amber-50 font-bold'>
        <h1 className='text-2xl'>{props.tittle}</h1>
        <div className='flex  gap-6 '>
           {props.links.map((elem,idx)=>{
             return <h2 key={idx} > {elem}</h2>
           })}
        </div>
    </div>
  )
}

export default Navbar