import React from 'react';
import './FeatureCard.css';
import CardItem from '../CardItem';

function FeatureCards() {
  return (
    <div className='fcards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/read.jpg'
              text='Discover thousands of stories, poems, articles, magazines, novels, essays, etc for free. Read popular genres. Save your favourites in your own library. Contents present in the It library are filled with endless emotions, thoughts, verses, and possibilities.'
              title= 'READ'
              path='/services'
            />
            <CardItem
              src='images/writing.png'
              text='Self-publish on It and join the largest community of writers. Create new drafts, add images and publish right from the app. It provides a hassle free and advanced writer panel to make your act of writing a little less scary and a whole lot comforting.'
              title= 'WRITE'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
