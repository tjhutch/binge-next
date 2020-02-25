import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/laptop.svg';
import '../css/Header.css';

const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <Link className='header-option' to='/'>Search</Link>
    <Link className='header-option' to='/saved'>Saved</Link>
  </header>
);

export default Header;
