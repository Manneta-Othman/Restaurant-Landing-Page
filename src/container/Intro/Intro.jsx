import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import  meal  from '../../assets/meal.mp4';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return (
    <div className='app-video'>
    <video 
      src={meal} 
      type='video/mp4'
      ref={vidRef}
      loop
      controls={false}
      muted
      />
      <div className="app-video-overlay flex-center">
        <div 
        className="app-video-overlay-circle flex-center"
        onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
  </div>
  )
  
}

export default Intro;
