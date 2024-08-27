import React from 'react'
import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Games from '../pages/Games/Games';
import Apps from '../pages/Apps/Apps';
import Psp from '../pages/Psp/Psp';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/apps' element={<Apps/>} />
        <Route path='/psp-games' element={<Psp/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default MainRoutes