
import React, { useState, useEffect } from 'react';
import './AllStories.css';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from "axios";

function AllStoriesCard(props) {

    return (
        <Card style={{ width: '18rem',  height :'12rem' ,background: 'linear-gradient(65deg, #7439db, #C66FBC 48%, #F7944D)'}}>
        <Card.Body >
          <Card.Title className='s_title'>{props.title}</Card.Title>
          <Card.Text style={{height :'5rem'}}>
            {props.description}
          </Card.Text>
          <Link to={props.path}><button type="button" className='e_button btn btn-light'>Episodes</button></Link>
        </Card.Body>
      </Card>
    );
}

export default AllStoriesCard;