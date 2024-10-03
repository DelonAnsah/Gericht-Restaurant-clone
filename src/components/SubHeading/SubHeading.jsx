import React from 'react'
import './SubHeading.css'
import spoon from '../../assets/spoon.png'

const SubHeading = ({ title }) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={spoon} alt="spoon" />
    </div>
  )
}

export default SubHeading
