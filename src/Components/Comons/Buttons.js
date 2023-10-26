import React from 'react';
import './Buttons.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="buttons" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
