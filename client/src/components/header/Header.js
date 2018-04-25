import React from 'react';
import './Header.scss';
import longArrowRight from '../../icons/long-arrow-right.svg';

const Header = ({fromPlace, toPlace, adults, cabinClass}) => (
  <header className='header'>
    <h1 className='header__places'>
      {fromPlace}
      <span className='header__arrow-container'>
        <img className='header__arrow' alt='to' src={longArrowRight}/>
      </span>
      {toPlace}
    </h1>
    <span className='header__details'>{adults}&nbsp;{adults === 1 ? 'adult' : 'travelers'}, {cabinClass}</span>
  </header>
);

export default Header;
