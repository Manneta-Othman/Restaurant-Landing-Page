import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images'
import data from '../../constants/data'

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app-laurels-awards-card'>
    <img src={imgUrl} alt="award" />
    <div className="app-laurel-awards-card-content">
      <p className="p-cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
);


const Laurels = () => (
  <div className='app-bg app-wrapper section-padding' id='awards'>
    <div className="app-wrapper-info">
      <SubHeading title='Awards & recognition' />
      <h1 className="headtext-cormorant">Our Laurels</h1>

      <div className="app-laurels-awards">
        {data.awards.map((award, index) => <AwardCard award={award} key={award.title + index} /> )}
      </div>

    </div>
    <div className="app-wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
