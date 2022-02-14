import logo from './logo.svg';
import React from 'react';
import './POPOSSpace.css';

const POPOSSpace = ({ name, image, address, hours}) => {
  return (
    <div className='POPOSSpace'>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default POPOSSpace;