import React from 'react';
import './AboutUs.css'
import GImage from '../../assets/G.png'
import aboutSpoon from '../../assets/spoon.png'
import knife from '../../assets/knife.png'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
   <div className="app__aboutus-overlay flex__center">
    <img src={ GImage } alt="G letter"  loading='lazy'/>
   </div>

   <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_about">
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={aboutSpoon } alt="about_spoon" loading='lazy' className='spoon__image' />
      <p className="p__opensans">In every journey, it is the blend of patience and persistence that shapes greatness. Just as a dish requires time to simmer and flavors to develop, so too does success emerge from a foundation of effort and care.</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>

    <div className="app__aboutus-content_knife flex__center" >
      <img src={knife} alt="about_knife" />
    </div>

    <div className="app__aboutus-content_history">
      <h1 className="headtext__cormorant">Our History</h1>
      <img src={aboutSpoon } alt="about_spoon" className='spoon__image' />
      <p className="p__opensans">Our story began with humble roots, much like a seed planted in fertile soil. Through time, dedication, and a passion for excellence, we have grown into a place where flavor and tradition meet. </p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
   </div>
  </div>
)

export default AboutUs
