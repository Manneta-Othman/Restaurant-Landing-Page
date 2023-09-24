import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import images from '../../constants/images'
import './Gallery.css';

const Gallery = () => {

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    }
  }

  return (
      <div className='app-gallery flex-center'>
        <div className="app-gallery-content">
          <SubHeading title='Instagram' />
          <h1 className="headtext-cormorant">Photo Gallery</h1>
          <p className="p-opensans" style={{color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type="button" className='custom-button'>View More</button>
        </div>

        <div className="app-gallery-images">
          <div className="app-gallery-images-container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className='app-gallery-images-card flex-center' key={`gallery-image + ${index + 1}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery-image-icon' />
              </div>
            ))};
          </div>
          <div className="app-gallery-images-arrows">
            <BsArrowLeftShort className='gallery-arrow-icon left' onClick={() => scroll('left')} />
            <BsArrowRightShort className='gallery-arrow-icon right' onClick={() => scroll('right')} />
          </div>
        </div>

      </div>
  );

}


export default Gallery;
