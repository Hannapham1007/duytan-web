import React from 'react'
import {FaFacebook,FaInstagram, FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='footer-container'>
    <div className='top'>
        <Link to='/home'>DUY TAN</Link>
        <Link to='https://www.facebook.com/people/Duy-Tan/100054294169759/'className='split'><FaFacebook size={24}/></Link>
        <Link to='https://www.instagram.com/duy_tanab/' className='split'><FaInstagram size={24}/></Link>

    </div>

    <div className='footer-row'>
        <div className='footer-col'>
            <h4>Öppettider</h4>
            <li> Mån - Fre: 11:00 - 21:00</li>
            <li>Lör: 12:00 - 21:00</li>
            <li>Sön: Stängt</li>
        </div>

        <div className='footer-col'>
            <h4>Kontakta oss</h4>
            <li> <FaPhoneAlt  className='footer-icon' /><a href="tel:031-220-250">031-220 250</a></li>
            <li ><FaMapMarkerAlt className='footer-icon' /> Kvilletorget 19</li>
            <li >  417 04 Göteborg</li>
            
        </div>

        <div className='footer-col'>
            <h4>Länkar</h4>
            <li><Link to='/meny'>Meny</Link> </li>
            <li><Link to='/lunch'>Lunch</Link> </li>
            <li><Link to='/contact'>Kontakt</Link></li>   
            
        </div>     
    </div>
    </div>
   
  )
}

export default Footer
