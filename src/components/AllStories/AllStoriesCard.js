
import React, { useState, useEffect } from 'react';
import './AllStories.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function AllStoriesCard(props) {

    return (
        <Link className='Stories-Link'>
            <div className="card">

                <img className="card-image" src="./images/m1.jpg" alt="Logo" />

                <div className="content">
                    <div className="story-card-stacked">

                        <div className="story-card-header">
                            <div className="e-card-header-title"><h2>{props.storyTitle}</h2></div>
                        </div>

                        <div className="e-card-content">
                            {props.storyDescription}
                        </div>
                    </div>

                    <div className="card-like-bar">
                        {props.liked ? (
                            <i class='fas fa-heart'></i>
                        ) : (
                            <i class='fas fa-heart-o'></i>
                        )}
                        <div className="like-text">
                            <b>{props.likeCount}</b>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default AllStoriesCard;