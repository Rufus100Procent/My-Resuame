import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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

export default Navbar;
