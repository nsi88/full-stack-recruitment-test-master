import React from 'react';
import './TopNav.scss';
import logo from '../../icons/logo.svg';
import burgerMenu from '../../icons/burger-menu.svg';

const TopNav = () => (
  <nav className='top-nav'>
    <a href="/">
      <span className='top-nav__logo-text'>Skyscanner</span>
      <img className='top-nav__logo' alt="Skyscanner" src={logo}/>
    </a>
    <img className='top-nav__burger-menu' alt='Menu' src={burgerMenu}/>
  </nav>
);

export default TopNav;
