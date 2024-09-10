import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Menu.css';

export let open;

function Menu() {
    return (
            <div className="Menu-container">
                <Link to='/' className="Menu-link">
                    Home
                </Link>
                <Link to='/about' className="Menu-link">
                    About
                </Link>
                <Link to='/projects' className="Menu-link">
                    Projects
                </Link>
                <Link to='/contact' className="Menu-link">
                    Contact
                </Link>
            </div>
    );
  }
  
  export default Menu;