import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Navbar'
import Details from './pages/Details'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App