import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Work from '../Components/Work'
import News from '../Components/News'
import Careers from '../Components/Careers'

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element = {<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element = {<News />} />
          <Route path="/careers" element = {<Careers />} />
        </Routes>
    </div>
  )
}

export default Routing