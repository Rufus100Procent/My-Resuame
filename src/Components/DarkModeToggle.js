import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBolt } from '@fortawesome/free-solid-svg-icons';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="dark-mode-toggle">
      <button className="toggle-button" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faBolt : faMoon} />
      </button>
    </div>
  );
};

export default DarkModeToggle;
