import React from 'react';
import './Episodes.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EpisodeCardItem from './EpisodeCardItem';

function EpisodeCards() {
  return (
    <div className='epcards'>
        <Card style={{width: '40rem',  height :'20rem' ,background: 'linear-gradient(65deg, #7439db, #C66FBC 48%, #F7944D)'}}>
        <Card.Body>
            <h1>RAMAYANA</h1>
            <h4>10 Episodes</h4>
            <p>4hours read <i className='fa fa-eye'></i></p>
            <p>Ratings 4.5 <i className='fa fa-star'></i></p>
          <Card.Text style={{height :'0.5rem'}}>
          </Card.Text>
        </Card.Body>
        </Card>
        
        <div className='ecards__container'>
            <div className='ecards__wrapper'>
                <EpisodeCardItem 
                title="Episode 1"/>
                <EpisodeCardItem 
                title="Episode 2"/>
                <EpisodeCardItem 
                title="Episode 3"/>
                <EpisodeCardItem 
                title="Episode 4"/>
                <EpisodeCardItem
                title="Episode 5" />
                <EpisodeCardItem
                title="Episode 6" />
                <EpisodeCardItem 
                title="Episode 7"/>
                <EpisodeCardItem 
                title="Episode 8"/>
                <EpisodeCardItem 
                title="Episode 9"/>
                <EpisodeCardItem 
                title="Episode 10"/>
                <EpisodeCardItem
                title="Episode 11" />
                <EpisodeCardItem
                title="Episode 12" />
            </div>
        </div>
    </div>
  )
}

export default EpisodeCards
