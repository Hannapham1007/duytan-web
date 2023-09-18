import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';
import {Link} from 'react-scroll';

function Nav() {
  
  return (
   <nav className='nav-container'>
    <div>
        <ul>
            <li>
            <Link to='/home'>DUY TAN</Link>
            <div style={{float:'right'}}>
            <Link to='/home' smooth={true} duration={500} >Home</Link>
            <Link to='lunch' smooth={true} duration={500}>Lunch</Link>
            </div>

            </li>
        </ul>
    </div>
   


   </nav>
  )
}

export default Nav
