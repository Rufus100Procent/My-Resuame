import React from 'react';
import './styles/Home.css';
import Skills from './Technologiy/Skills';
import Tech from './Technologiy/Tech';
import { bioTexts} from './Utills/Text';
import Imagess from './jerry.svg'
export const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <div className='aboutArticle'>
          <h2>{bioTexts.WELCAME_TEXT_HEADER}</h2>
          <p>{bioTexts.WELCAME_TEXT_HEADER}  </p>
        </div>
        <div className='aboutImage'>
          {/*profile Picture*/}
          <img src={Imagess} alt='YourImage' />
        </div>
      </div>
      <Tech />
      <Skills />
    </div>
  );
};
