import React from 'react';
import './styles/Home.css';
import Skills from './Technologiy/Skills';
import Tech from './Technologiy/Tech';
import Logomy from './assets/jerry.svg'
import { bioTexts} from './Utills/Text';

export const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <div className='aboutArticle'>
          <h2>{bioTexts.WELCAME_TEXT_HEADER}</h2>
          <p>{bioTexts.WELCAME_TEXT_BODY}</p>
        </div>
        <div className='aboutImage'>
          <img src={Logomy} alt='YourImage' />
        </div>
      </div>
      <Skills />
      <Tech />
    </div>
  );
};
