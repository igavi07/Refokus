import React from 'react'
import Routing from './utils/Routing'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar />
      <Routing />
    </div>
  )
}

export default App