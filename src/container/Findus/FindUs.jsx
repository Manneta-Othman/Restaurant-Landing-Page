import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images'

const FindUs = () => (
  <div className='app-bg app-wrapper section-padding'>
    <div className="app-wrapper-info">
      <SubHeading title='Contact' />
      <h1 className="headtext-cormorant" style={{marginBottom: '3rem'}} >Find Us</h1>
      <div className="app-wrapper-cintainer">
        <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p-cormorant" style={{color:'#DCCA87', margin: '2rem 0'}} >Opening Hours</p>
        <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom-button' style={{marginTop
      : '2rem'}} >Visit US</button>
    </div>
    <div className="app-wrapper-img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
