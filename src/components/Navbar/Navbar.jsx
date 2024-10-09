import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import logo from '../../assets/gericht.png'

const List = ( { closeMenu }) => (
  <>
    <li className="p__opensans">
      <a href="#home" onClick={() => closeMenu()}>Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about" onClick={() => closeMenu()}>About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu" onClick={() => closeMenu()}>Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards" onClick={() => closeMenu()}>Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact" onClick={() => closeMenu()}>Contact</a>
    </li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCloseMenu = () => {
    setToggleMenu(false);
  }

  return (
    <div className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" loading='lazy'/>
      </div>
      <ul className='app__navbar-links'>
        <List closeMenu={() => {}} />
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
           <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={handleCloseMenu} />
           <ul className="app__navbar-smallscreen_links">
             <List closeMenu={handleCloseMenu} />
           </ul>
         </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
