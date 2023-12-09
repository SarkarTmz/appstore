import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/Header.css'
import logo from '../images/logo.jpg'

function Navbar() {
  return (
    <>
      <div className="header container">
        <img src={logo} alt="" />
        <ul>
            <Link to="/" >Home</Link>
            <Link to="games" >Games</Link>
            <Link to="apps" >Apps</Link>
            <Link to="psp-games" >PSP Games</Link>
            <Link to="contact" >Contact</Link>
        </ul>
      </div>
      </>
  )
}

export default Navbar