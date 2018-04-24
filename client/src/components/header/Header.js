import React from 'react';
import './Header.scss';
import longArrowRight from '../..//long-arrow-right.svg';

const Header = ({fromPlace, toPlace, adults, cabinClass}) => (
  <header className='header'>
    <h1 className='places'>
      {fromPlace}
      <span className='arrowContainer'>
        <img className='arrow' alt='to' src={longArrowRight}/>
      </span>
      {toPlace}
    </h1>
    <span className='details'>{adults}&nbsp;{adults === 1 ? 'adult' : 'travelers'}, {cabinClass}</span>
  </header>
);

export default Header;
