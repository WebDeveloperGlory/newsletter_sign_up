import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Homepage, About, Contact, Services } from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="">
        Hello There
        <div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about_us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/:id' element={<div>placeholder</div>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
