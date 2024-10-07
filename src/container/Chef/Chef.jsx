import React from 'react'
import './Chef.css'
import chef from '../../assets/chef.png'
import SubHeading from '../../components/SubHeading/SubHeading'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse" >
    <img src={chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading  title="Chef's Word"  />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={quote} alt="quote" />
          <p className="p__opensans">At the heart of every great dish lies balance, precision, and passion. </p>
        </div>
        <p className="p__opensans">We believe that every meal should be an experience—crafted with care, infused with flavor, and served with purpose. From the first ingredient to the final presentation, each step is a celebration of tradition and innovation. </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={sign} alt="sign" />
      </div>
    </div>
  </div>
)

export default Chef
