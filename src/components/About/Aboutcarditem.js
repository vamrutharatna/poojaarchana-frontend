import React from 'react';

function AboutCardItem(props) {
  return (
    <>
      <li className='Acards__item'>
          <div className='Acards__item__info'>
            <h5 className='Acards__item__title'>{props.title}</h5>
            <h5 className='Acards__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default AboutCardItem;
