import React, {useState} from 'react';
import'./Navbar.css';
import {FaBars} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
   
   
  return (
    <nav className='navbar'>
    <div className='nav'>
    <div className='title-bars'>

   
    <NavLink to='/home' className='site-title'>DUY TAN</NavLink>
    
    <FaBars  className='toggle-button'onClick={()=> setMenuOpen(!menuOpen)}/>  
    </div>
    <div>

    
    <ul className={menuOpen ? "open" : "close"}>
        <li >
            <NavLink  onClick={()=> setMenuOpen(!menuOpen)}to='/home'>Home</NavLink>
        </li>
        <li>
            <NavLink onClick={()=> setMenuOpen(!menuOpen)} to='/meny'>Meny</NavLink>
        </li>
        <li>
            <NavLink smooth={true} duration={500}  onClick={()=> setMenuOpen(!menuOpen)} to='/lunch'>Lunch</NavLink>
        </li>
        <li>
            <NavLink onClick={()=> setMenuOpen(!menuOpen)} to='/contact'>Kontakt</NavLink>
        </li>
            
    </ul>
    </div>
   

  </div> 
  </nav>
  )
}

export default Navbar
