import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='app-navbar'>
    <div className="app-navbar-logo">
      <img src={images.gericht} alt="logo"/>
    </div>

    <ul className="app-navbar-links">
      <li className="p-opensans"><a href="#home">Home</a></li>
      <li className="p-opensans"><a href="#about">About</a></li>
      <li className="p-opensans"><a href="#menu">Menu</a></li>
      <li className="p-opensans"><a href="#awards">Awards</a></li>
      <li className="p-opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app-navbar-login">
      <a href="#login" className='p-opensans'>Log In / Register</a>
      <div/>
      <a href="/" className='p-opensans'>Book Table</a>
    </div>

    <div className="app-navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true) } />
      {
        toggleMenu && (
        <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
          <MdOutlineRestaurantMenu className='overlay-close' fontSize={27} classNameoverlay-close onClick={() => setToggleMenu(false) } />
          <ul className="app-navbar-smallscreen-links" onClick={() => setToggleMenu(false) }>
            <li className="p-opensans"><a href="#home">Home</a></li>
            <li className="p-opensans"><a href="#about">About</a></li>
            <li className="p-opensans"><a href="#menu">Menu</a></li>
            <li className="p-opensans"><a href="#Awards">Awards</a></li>
            <li className="p-opensans"><a href="#contact">Contact</a></li>

            <div className="app-navbar-smallscreen-login">
              <a href="#login" className='p-opensans'>Log In / Register </a>
              <a href="/" className='p-opensans'>Book Table</a>
            </div>
          </ul>
      </div>
      )}

    </div>
  </nav>

  )
  };

export default Navbar;
