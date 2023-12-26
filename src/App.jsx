import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import LandingPage from './pages/LandingPage'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} /> 
        <Route path='/home' element={<Home/>} /> 
        <Route path='/history' element={<WatchHistory/>} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
