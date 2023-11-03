import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../images/port-logo-small.png'
import contact from '../images/contact.png'
import menu from '../images/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">

      <img className="logo" src={logo} alt="budumdum"/>

      <div className="navmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={600} className='menu'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-79} duration={600} className='menu'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-78} duration={600} className='menu'>Projects</Link>
      </div>

      <button className="navbtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contact} alt="button" className='contactImg'/>
        <div className="contactText">Contact Me</div>
      </button>


      <img className="burger" src={menu} alt="mobMenu" onClick={()=>{
        setShowMenu(!showMenu)
      }}/>

      <div className="burger-nav" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={600} className='burgerMenu' onClick={()=>{
          setShowMenu(false)
        }}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-79} duration={600} className='burgerMenu' onClick={()=>{
          setShowMenu(false)
        }}>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-78} duration={600} className='burgerMenu' onClick={()=>{
          setShowMenu(false)
        }}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={600} className='burgerMenu' onClick={()=>{
          setShowMenu(false)
        }}>Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;
