import React from 'react';

import logo from 'assets/Logo.svg';
import diver from 'assets/diver.png';
import diverMobile from 'assets/diver_mobile.png';

import './styles.scss';

const Home = () => (
  <div className="home">
    <img className="diver diver-desktop" src={diver} alt="Diver Graphic" />
    <img className="diver diver-mobile" src={diverMobile} alt="Diver Graphic" />

    <div className="info-text">
      <img className="logo" src={logo} alt="HackIllinois Logo" />
      <h1>Make Waves</h1>
      <h3>Feb. 22-24, 2019</h3>
      <p>{50 / 2}</p>
    </div>
  </div>
);

export default Home;
