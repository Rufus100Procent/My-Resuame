import React, { useState } from 'react';
import '../sstyles/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className={`toggleButton ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contacts" onClick={toggleMenu}>Contact</Link>
      </div>
    </div>
  );
};
