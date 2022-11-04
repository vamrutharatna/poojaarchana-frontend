import React from 'react';
import './Popular.css';
import CardItem from '../CardItem';

function PopularCards() {
  return (
    <div className='pcards'>
      <h1>Check Out Popular Things!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/krishna.jpg'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms'
              label='Mythology'
              title = 'LORD KRISHNA'
              path='/products'
            />
            <CardItem
              src='images/temple.jpg'
              title = 'ISKON TEMPLE'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms'
              label='Temple'
              path='/sign-up'
            />
            <CardItem
              src='images/f1.jpg'
              title='DUSSHERA'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms'
              label='Festival'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularCards;
