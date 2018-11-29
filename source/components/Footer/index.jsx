import React from 'react';

import envelope from 'assets/Icons/envelope.svg';
import facebook from 'assets/Icons/facebook-f.svg';
import github from 'assets/Icons/github.svg';
import globe from 'assets/Icons/globe.svg';
import instagram from 'assets/Icons/instagram.svg';
import twitter from 'assets/Icons/twitter.svg';

import './styles.scss';

const Footer = () => (
  <div className="Footer">
    <a href="https://www.github.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="Github Icon" />
    </a>
    <a href="https://blog.hackillinois.org" target="_blank" rel="noopener noreferrer">
      <img src={globe} alt="Blog Icon" />
    </a>
    <a href="https://www.facebook.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook Icon" />
    </a>
    <a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Instagram Icon" />
    </a>
    <a href="https://twitter.com/hackillinois" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter Icon" />
    </a>
    <a href="mailto:contact@hackillinois.org" target="_blank" rel="noopener noreferrer">
      <img src={envelope} alt="Mail Icon" />
    </a>
  </div>
);

export default Footer;
