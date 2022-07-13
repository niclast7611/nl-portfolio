import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

  const [nav, setNavbar] = useState(false)
  const changeBackGround = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
      console.log(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackGround)

  const toggleHome = () => {
    scroll.scrollToTop()
  }

    return (
      <div>
        <nav className={nav ? 'nav active' : 'nav'}>
          <div id = 'container'>

              <Link id='intials' to='home' smooth={true} exact='true' spy={true} offset={50} duration={500} onClick={toggleHome}>N L</Link>

            <ul id ='nav-ul'>
            
            <li id ='nav-bar-links'>
              <Link to='about' smooth={true} exact='true' spy={true} offset={-125} duration={500} activateClass='active'>About</Link>
            </li>
            <li id ='nav-bar-links'>
              <Link to='skill-stack' smooth={true} exact='true' spy={true} offset={-25} duration={500} activateClass='active'>Skill Stack</Link>
            </li>
            <li id ='nav-bar-links'>
              <Link to='projects' smooth={true} exact='true' spy={true} offset={-100} duration={500} activateClass='active'>Projects</Link>
            </li>
            <li id ='nav-bar-links'>
              <Link to='contact' smooth={true} exact='true' spy={true} offset={-100} duration={500} activateClass='active'>Contact</Link>
            </li>
            </ul>
          
         
          </div>
    
        </nav>
      </div>
    )
  }

export default Navbar