import React from 'react';
import './Bio.css'; // Import the CSS file for styling
import { bioTexts } from '../Utills/Text';

const Bio = () => {
  return (
    <section className="welcameBio">
      <div  className='bio'>
      <h2>{bioTexts.WELCAME_TEXT_HEADER}</h2>
      <p>{bioTexts.WELCAME_TEXT_BODY}</p>
      </div>
    </section>
  );
};

export default Bio;
