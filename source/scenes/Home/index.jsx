// @flow
import React from 'react';

// import logo from 'assets/Logo.svg';
import clouds from 'assets/Home/clouds_stars.svg';
import logo from 'assets/Logo.svg';
import rocksTop from 'assets/Home/rocks_top.png';
import rocksBottom from 'assets/Home/rocks_bottom.png';
import waveFront from 'assets/Home/wave_front.svg';
import waveMid from 'assets/Home/wave_mid.svg';
import waveBack from 'assets/Home/wave_back.svg';

import './styles.scss';

const Home = () => (
  <div className="home">
    <div className="sky">
      <div className="cloud-wrapper">
        <img className="clouds" src={clouds} alt="Clouds and Stars" />
      </div>

      <div className="sun-wrapper">
        <div className="sun">
          <img src={logo} alt="HackIllinois Logo" />
          <h1>Make Waves</h1>
          <p>February 22-24</p>
        </div>
      </div>

      <img className="rocks-top" src={rocksTop} alt="Rocks top" />
    </div>

    <div className="water">
      <img className="wave-back" src={waveBack} alt="Wave Back" />
      <img className="wave-mid" src={waveMid} alt="Wave Middle" />
      <img className="wave-front" src={waveFront} alt="Wave Front" />

      <div className="rocks">
        <img className="rocks-bottom" src={rocksBottom} alt="rocks" />
      </div>
    </div>
  </div>
);

export default Home;
