import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=' h-screen w-screen p-1 flex flex-col bg-black gap-3'>
      <Navbar tittle={'Shyrians'} color={'pink'} links={['Home','Services','Contact','About']} />
      <Navbar tittle={'Shyrians'}  color={'orange'}links={['Home','Courses','Contact','About']} />
    </div>
  )
}

export default App