import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app-specialMenu flex-center section-padding' id='menu'>
    <div className="app-specialMenu-title">
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='head-text-cormorant'>Today's Special</h1>
    </div>
    <div className="app-specialMenu-menu">
      <div className="app-specialMenu-menu-drinks flex-center">
        <p className='app-specialMenu-menu-heading'>Drinks and Smoothies</p>
        <div className="app-specialMenu-menu-items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))}
        </div>
      </div>

      <div className="app-specialMenu-menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app-specialMenu-menu-cocktails flex-center">
        <p className='app-specialMenu-menu-heading'>Cocktails</p>
        <div className="app-specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

      <div style={{marginTop: '15px'}}>
        <button type="button" className='custom-button'>View More</button>
      </div>

  </div>
);

export default SpecialMenu;
