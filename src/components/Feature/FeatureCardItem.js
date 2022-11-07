import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCardItem(props) {
  return (
    <>
      <li className='fcards__item'>
        <Link className='fcards__item__link' to={props.path}>
          <figure className='fcards__item__pic-wrap' data-category={props.label}>
            <img 
              className='fcards__item__img'
              alt=' Image'
              src={props.src}
            />
          </figure>
          <div className='fcards__item__info'>
            <h5 className='fcards__item__title'>{props.title}</h5>
            <h5 className='fcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeatureCardItem;
