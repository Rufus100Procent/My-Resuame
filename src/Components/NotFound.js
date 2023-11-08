import React from 'react';
import notFoundImage from './assets/PinkPanthr.jpeg';
import './styles/NotFound.css'; // Import the CSS file

export const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>Error: Page Not Found</h1>
      <div className='image-container'>
        <img src={notFoundImage} alt="PageNotFoundImage" className='img' />
      </div>
    </div>
  );
};
