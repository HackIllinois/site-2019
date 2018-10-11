import React from 'react';
import { Icon } from 'semantic-ui-react';

import './styles.scss';

const Footer = () => (
  <div className="Footer">
    <a href="https://www.github.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <Icon name="github" size="big" />
    </a>
    <a href="https://blog.hackillinois.org" target="_blank" rel="noopener noreferrer">
      <Icon name="globe" size="big" />
    </a>
    <a href="https://www.facebook.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <Icon name="facebook f" size="big" />
    </a>
    <a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noopener noreferrer">
      <Icon name="instagram" size="big" />
    </a>
    <a href="https://twitter.com/hackillinois" target="_blank" rel="noopener noreferrer">
      <Icon name="twitter" size="big" />
    </a>
    <a href="mailto:contact@hackillinois.org" target="_blank" rel="noopener noreferrer">
      <Icon name="mail" size="big" />
    </a>
  </div>
);

export default Footer;
