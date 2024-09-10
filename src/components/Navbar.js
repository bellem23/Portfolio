import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Hamburger from 'hamburger-react';
import Menu from './Menu'



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  if (click) {
    return (
      <header>
        <nav className="NavMenu">
          <div className="MenuContent">
            <Menu />
          </div>
          <div className="MenuIcon">
              <Hamburger toggled={click} toggle={setClick} />
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header>
        <nav className="Navbar">
            <div className="Navbar-container">
                <Link to='./' className="Navbar-link">
                  Home
                </Link>
                <Link to='/about' className="Navbar-link">
                  About
                </Link>
                <Link to='/projects' className="Navbar-link">
                  Projects
                </Link>
                <Link to='/contact' className="Navbar-link">
                  Contact
                </Link>
            </div>
            <div className="MenuIcon">
              <Hamburger toggled={click} toggle={setClick} />
            </div>
        </nav>
        
    </header>
  );
}

export default Navbar;