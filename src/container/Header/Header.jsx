import React from 'react';
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import headerImage from '../../assets/welcome.png'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className="app__header-h1">The Key to Fine Dining</h1>
    <p className="p__opensans" style={{ margin: '2rem 0'}}>Like a well-prepared dish, life requires balance. The sweetness of success is tempered by the bitterness of challenges, and it’s through this blend that true flavor emerges. </p>
    <button type='button' className='custom__button'>Explore Menu</button>
   </div>
   <div className="app__wrapper_img">
    <img src={headerImage} alt="header image" />
   </div>
  </div>
)

export default Header
