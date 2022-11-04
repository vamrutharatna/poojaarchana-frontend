import React from 'react';
import './About.css';
import AboutCardItem from './Aboutcarditem';

function AboutCard() {
  return (
    <div className='Acards'>
        <h1>About Us</h1>
      <div className='Acards__container'>
        <div className='Acards__wrapper'>
          <ul className='Acards__items'>
            
            <AboutCardItem
              title = 'OUR MISSION'
              text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
            />
            <AboutCardItem
              title = 'OUR VISION'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
