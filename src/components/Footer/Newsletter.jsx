import React, { useEffect, useState } from 'react'
import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'
import { FaTimes } from 'react-icons/fa'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubmitted(true);
      setErrorMessage('');
      setEmail(''); //clear the input field after successful submission
    } else {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitted(false);
    }
  }

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000)
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);


  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Enter your e-mail address' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className='custom__button active__button' onClick={handleSubmit}>Subscribe</button>
      </div>
      <div className="app__newsletter-message">
      {errorMessage && (
         <p className='error-message'>{errorMessage}</p>
      )}
      {isSubmitted && (
        <p className='success-message'>
          Thank you for subsribing!
         <FaTimes onClick={() => setIsSubmitted(false)} className='close-icon'/>
        </p>
      )}
      </div>
    </div>
  )
}

export default Newsletter
