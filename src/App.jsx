
import { useState } from 'react'
import Navbar from './Components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
