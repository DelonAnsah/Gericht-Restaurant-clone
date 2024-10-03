import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import logo from '../../assets/gericht.png'

const List = () => (
  <>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <List />
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="#login" className="p__opensans"> Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#FFF' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
           <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
           <ul className="app__navbar-smallscreen_links">
             <List />
           </ul>
         </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
