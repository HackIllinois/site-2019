// @flow
import React from 'react';

import clouds from 'assets/Home/clouds_stars.svg';
import fish from 'assets/Home/fish.png';
import logo from 'assets/logo.svg';
import midTopHalf from 'assets/Home/rock_top_half.png';
import midBottomHalf from 'assets/Home/rock_bottom_half.png';
import oceanArch from 'assets/Home/ocean-arch.png';
import oceanFloor from 'assets/Home/ocean-floor.png';
import rocksTop from 'assets/Home/rocks_top.png';
import waveFront from 'assets/Home/wave-front.svg';
import waveMid from 'assets/Home/wave-mid.svg';
import waveBack from 'assets/Home/wave-back.svg';

import FAQ from './components/FAQ';
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
    </div>

    <div className="rocks-top-wrapper">
      <img className="rocks-top" src={rocksTop} alt="Rocks top" />
    </div>

    <div className="water">
      <img className="wave wave-back" src={waveBack} alt="Wave Back" />
      <img className="wave wave-mid" src={waveMid} alt="Wave Middle" />
      <img className="wave wave-front" src={waveFront} alt="Wave Front" />

      <div className="rocks">
        <img className="mid-top-half" src={midTopHalf} alt="rocks" />
        <FAQ />

        <div id="rocks-mid-bottom-grouping">
          <img className="mid-bottom-half" src={midBottomHalf} alt="rocks" />
          <div id="fish-wrapper">
            <img id="fish" src={fish} alt="fish" />
          </div>
        </div>

        <div className="floor">
          <img className="ocean-arch" src={oceanArch} alt="Rock arch" />
          <img className="ocean-floor" src={oceanFloor} alt="Ocean Floor" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
