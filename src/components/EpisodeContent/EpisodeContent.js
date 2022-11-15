import React from 'react';
import './EpisodeContent.css'

const EpisodeContent = () => {
  return (
    <div>
        <div className="container-xl">
            <div className='epcontent'>             
                <div className='left_epcontent'>
                    <p>
                        <i className='fa fa-book'></i>
                    </p>
                    <p>
                        <i className='fas fa-volume-up'></i>
                    </p>
                    <p>
                        <i className='fa fa-moon'></i>
                    </p>
                    <p>
                        <i className='fa fa-share-alt'></i>
                    </p>
                    <p>
                        <i className='fa fa-font'></i>
                    </p>
                    <p>
                        <i className='fa fa-font fa-xs'></i>
                    </p>
                    <p>
                        <i className='fa fa-bookmark'></i>
                    </p>
                    <p>
                        <i className='fa fa-heart'></i>
                    </p>
                    <p>
                        <img src='images/quiz.svg'></img>
                    </p>

                    <p>
                    <i class="material-icons">translate</i>
                    </p>
                </div>
                <div className='right_epcontent'>

                </div>
            </div>
        </div>

    </div>
  )
}

export default EpisodeContent
