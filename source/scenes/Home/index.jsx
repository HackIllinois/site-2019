import React from 'react';

import logo from 'assets/Logo.svg';
import diver from 'assets/diver.png';

import './styles.scss';

const Home = () => (
  <div className="home">
    <img className="diver" src={diver} alt="Diver Graphic" />
    <div className="info-text">
      <img className="logo" src={logo} alt="HackIllinois Logo" />
      <h1>Dive Deeper</h1>
      <h3>Feb. 22-24, 2019</h3>
    </div>
  </div>
);

export default Home;
