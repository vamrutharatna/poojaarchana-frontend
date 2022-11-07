import React from 'react';
import '../../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <Carousel infiniteLoop autoPlay>
    <div className='hero-container'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>

    <div className='hero-container bg1'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>

    <div className='hero-container bg2'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>

    <div className='hero-container bg3'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>

    <div className='hero-container bg4'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>

    <div className='hero-container bg5'>
      <h1>MYSTERY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          READ STORY <i class='fas fa-book-reader'></i>
        </Button>
      </div>
    </div>
    </Carousel>
    </>
    
  );
}

export default HeroSection;
