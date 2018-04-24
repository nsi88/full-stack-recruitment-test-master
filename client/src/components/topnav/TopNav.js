import React from 'react';
import './TopNav.scss';
import logo from '../..//logo.svg';
import burgerMenu from '../..//burger-menu.svg';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <img className='burgerMenu' alt='Menu' src={burgerMenu}/>
  </header>
);

export default TopNav;
