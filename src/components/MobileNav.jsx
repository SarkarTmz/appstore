import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';

import '../styles/component/MobileNav.css'
import logo from '../images/logo.jpg'


const MobileNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className='bar container' >
      <NavLink to="/"><img src={logo} alt="Logo" className='logo' /></NavLink>
      <RiMenu3Fill className='menu' onClick={toggleMenu} />
    </div>

    <div className= {isOpen ? "mobile-nav" : "menu-li"}  id="mobile">
        <ul>
              <NavLink to="/">
                  Home
              </NavLink>
              <NavLink to="/games">
                  Games
              </NavLink>
              <NavLink to="/apps">
                  Apps
              </NavLink>
              <NavLink to="/psp-games">
                  Psp Games
              </NavLink>
              <NavLink to="/contact">
                  Contact
              </NavLink>
              </ul>
    </div>


    </>
  )
}

export default MobileNav