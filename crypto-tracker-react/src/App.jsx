import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home/Home.jsx"
import Contact from "../pages/Contact/Contact.jsx"
import Coin from '../pages/Coin/Coin.jsx'
function App() {
  return (
    <div className='app'>
          <Navbar/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/coin/:coinId" element={<Coin/>}/>
             <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </div>
  )
}

export default App
