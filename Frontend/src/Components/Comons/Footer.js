import React from 'react';
import '../styles/Footer.css';
import GithubLogo from '../assets/github-original.svg'
import LinkedIn from '../assets/linkedin-new-2020-seeklogo.com.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Mr</p>
      <div className="footer-links">
        <a href="https://github.com/Rufus100Procent" target="_blank" rel="noopener noreferrer">
          <img src={GithubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-ali-3b976b261" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
