import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

const App = () => {
  console.log(window.location)
  return (
     <>
        <Navbar />
        <Routes>
            <Route path='/work' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile />}/>
            
        </Routes>
     </>
     
    
  )
}

export default App
