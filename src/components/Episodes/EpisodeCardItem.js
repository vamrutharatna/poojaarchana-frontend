import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Episodes/Episodes.css'

function EpisodeCardItem(props) {
  return (
    <Link className='episode_linkitem' to='/episode-content'>
    <Card style={{ width: '20rem',  height :'6rem' ,background: 'linear-gradient(65deg, #7439db, #C66FBC 48%, #F7944D)'}}>
        <Card.Body >
          <Card.Title className='s_title' style={{ textAlign: 'center' }}>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default EpisodeCardItem
