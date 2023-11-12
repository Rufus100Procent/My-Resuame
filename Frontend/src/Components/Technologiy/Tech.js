import React from 'react';
import '../styles/Tech.css';
import GitHubLogo from '../assets/github-original.svg'; // Import the SVG file
import Maven from '../assets/Maven.svg'; // Import the SVG file
import Java from '../assets/java.svg'
import ReactLogo from '../assets/React.svg'
import Git from '../assets/Git.svg'
import AmazonLogo from '../assets/AmazonLogo.svg'
import HTMLogo from '../assets/HTML.svg'
import CSS3 from '../assets/css3.svg'
import JavaScriptLogo from '../assets/JavaScript.svg'
import PostgresQL  from '../assets/PostgresQL.svg'
import MySQL  from '../assets/MySQL.svg'
import Spring  from '../assets/Spring.svg'
import JenkinsLogo  from '../assets/JenkinsLogo.svg'
import Docker  from '../assets/Docker.svg'
import ActiveDirectory from '../assets/active-directory-seeklogo.com.svg'


const logos = [
  { id: 1, type: 'svg', src: GitHubLogo, alt: 'GitHub' },
  { id: 2, type: 'svg', src: Git, alt: 'Git' },
  { id: 3, type: 'svg', src: Java, alt: 'Java' },
  { id: 4, type: 'svg', src: Spring, alt: 'Springboot' },
  { id: 5, type: 'svg', src: Maven, alt: 'Maven' },
  { id: 6, type: 'svg', src: JenkinsLogo, alt: 'Jenkins' },
  { id: 7, type: 'svg', src: MySQL, alt: 'MySQL' },
  { id: 8, type: 'svg', src: PostgresQL,  alt: 'Postgres' },
  { id: 9, type: 'svg', src: AmazonLogo, alt: 'AWS' },
  { id: 10, type: 'svg', src: Docker, alt: 'Docker' },
  { id: 11, type: 'svg', src: HTMLogo , alt: 'HTML' },
  { id: 12, type: 'svg', src: CSS3 , alt: 'CSS' },
  { id: 13, type: 'svg', src: JavaScriptLogo, alt: 'JavaScript' },
  { id: 14, type: 'svg', src: ReactLogo, alt: 'React' },
  { id: 15, type: 'svg', src: ActiveDirectory, alt: 'ActiveDirectory' },

];

const Tech = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {logos.map((item) => (
          <div className="logo-item" key={item.id}>
            {item.type === 'svg' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;