// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for the Header component

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">Allison Karp</NavLink>
        <div className="nav-links">
          <NavLink to="/" exact activeClassName="active">Work</NavLink>
          <NavLink to="/play" activeClassName='active'>Play</NavLink>
          <NavLink to="/about" activeClassName='active'>About</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
