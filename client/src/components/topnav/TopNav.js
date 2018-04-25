import React from 'react';
import './TopNav.scss';
import logo from '../../icons/logo.svg';
import burgerMenu from '../../icons/burger-menu.svg';

const TopNav = () => (
  <nav className='top-nav'>
    <a href="/">
      <span className='logo-text'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <img className='burger-menu' alt='Menu' src={burgerMenu}/>
  </nav>
);

export default TopNav;
