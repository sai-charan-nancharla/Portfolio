import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/projects" className='nav-item'>Projects</Link>
        <Link to="/skills" className='nav-item'>Skills</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
    </nav> 
    </>
  ) 
}

export default Navbar