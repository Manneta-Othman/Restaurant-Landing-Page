import React from 'react';

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images'
import './Footer.css';

const Footer = () => (
  <div className='app-footer section-padding' id='contact'>
    <FooterOverlay />
    <Newsletter />

    <div className="app-footer-links">
      <div className="app-footer-links-contact">
        <h1 className="app-footer-headtext">Contact Us</h1>
        <p className="p-opensans">Hay Iddari Maaziz, Khemisset</p>
        <p className="p-opensans">+212 6-499-32423</p>
      </div>
      <div className="app-footer-links-logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p-opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" className='spoon-img' style={{marginTop: '15'}} />
        <div className="app-footer-links-icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app-footer-links-work">
        <h1 className="app-footer-headtext">Working Hours</h1>
        <p className="p-opensans">Monday-Friday:</p>
        <p className="p-opensans">08:00 am -12:00 am</p>
        <p className="p-opensans">Saturday-Sunday: </p>
        <p className="p-opensans">07:00am -11:00 pm</p>
      </div>

    </div>
    <div className="footer-copyright">
      <p className="p-opensans">2023 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
