import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images'

import './Header.css';

const Header = () => (
  <div className='app-header app-wrapper section-padding'>
    <div className="app-wrapper-info">
      <SubHeading title='Chase the new flavour' />
      <h1 className="app-header-h1 headtext-cormorant" style={{margin: '2rem 0'}}>The Key to Fine Dining</h1>
      <p className='p-opensans' style={{marginBottom: '1.5rem'}}>Sit tell us lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom-button' type="button">Explore Menu</button>
    </div>

    <div className="app-wrapper-img">
     <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;

/* 
<h5 className='p-cormorant' >Chase the new Flavour</h5>
      <img className='spoon-img' src={images.spoon} alt="spoon" />
      <h1 className='headtext-cormorant' >The key to Fine dining</h1>
      <p className='p-opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom-button' type="button">Explore Menu</button> */