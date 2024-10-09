import React from 'react'
import './Footer.css'
import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import logo from '../../assets/gericht.png'
import spoon from '../../assets/spoon.png'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'


const Footer = () => {
 

  return(

  <div className='app__footer section__padding' id='last'>
    <FooterOverlay />
    <Newsletter />
    <div className='top-link'>
      <div  className='top-link-div'/>
      <a href="#home" aria-label='home'>TOP</a>
    </div>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={logo} alt="footer_logo" loading='lazy'/>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15'}}/>
        <div className="app__footer-links_icons">
          <a href="http://www.facebook.com/DelonAnsah" target="_blank" rel="noopener noreferrer" aria-label='X'><FiFacebook /></a>
          <a href="http://www.x.com/ansahDelon" target="_blank" rel="noopener noreferrer" aria-label='X'><BsTwitterX /></a>
          <a href="http://www.instagram.com/delon_ansah" target="_blank" rel="noopener noreferrer" aria-label='instagram'><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_works">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
)
}

export default Footer
