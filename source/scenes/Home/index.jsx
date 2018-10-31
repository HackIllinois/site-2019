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
import starfish from 'assets/Home/starfish.png';
import waveFront from 'assets/Home/wave-front.svg';
import waveMid from 'assets/Home/wave-mid.svg';
import waveBack from 'assets/Home/wave-back.svg';

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
        <div className="mid-content">
          <div className="content-column">
            <div id="header-1" className="column-header">
              <img id="starfish" src={starfish} alt="starfish" />
              <h3>General</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum nulla vel diam
              laoreet tincidunt. Sed eros sem, lobortis eget venenatis id, consequat varius leo. Ut
              lorem eros, semper a odio ac, laoreet egestas metus. Nullam interdum fermentum varius.
              Maecenas viverra nisl et velit blandit, nec iaculis lorem fermentum. Vivamus lobortis
              tincidunt dolor aliquam hendrerit. Ut luctus porta quam et mollis. Sed quam nisl,
              congue gravida vulputate quis, tempor a urna.
            </p>
          </div>

          <div className="content-column">
            <div id="header-2" className="column-header">
              <h3>Before</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum nulla vel diam
              laoreet tincidunt. Sed eros sem, lobortis eget venenatis id, consequat varius leo. Ut
              lorem eros, semper a odio ac, laoreet egestas metus. Nullam interdum fermentum varius.
              Maecenas viverra nisl et velit blandit, nec iaculis lorem fermentum. Vivamus lobortis
              tincidunt dolor aliquam hendrerit. Ut luctus porta quam et mollis. Sed quam nisl,
              congue gravida vulputate quis, tempor a urna.
            </p>
          </div>

          <div className="content-column">
            <div id="header-3" className="column-header">
              <h3>During</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum nulla vel diam
              laoreet tincidunt. Sed eros sem, lobortis eget venenatis id, consequat varius leo. Ut
              lorem eros, semper a odio ac, laoreet egestas metus. Nullam interdum fermentum varius.
              Maecenas viverra nisl et velit blandit, nec iaculis lorem fermentum. Vivamus lobortis
              tincidunt dolor aliquam hendrerit. Ut luctus porta quam et mollis. Sed quam nisl,
              congue gravida vulputate quis, tempor a urna.
            </p>
          </div>

          <div className="content-column">
            <div id="header-4" className="column-header">
              <h3>After</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum nulla vel diam
              laoreet tincidunt. Sed eros sem, lobortis eget venenatis id, consequat varius leo. Ut
              lorem eros, semper a odio ac, laoreet egestas metus. Nullam interdum fermentum varius.
              Maecenas viverra nisl et velit blandit, nec iaculis lorem fermentum. Vivamus lobortis
              tincidunt dolor aliquam hendrerit. Ut luctus porta quam et mollis. Sed quam nisl,
              congue gravida vulputate quis, tempor a urna.
            </p>
          </div>
        </div>
        <div id="rocks-mid-bottom-grouping">
          <img className="mid-bottom-half" src={midBottomHalf} alt="rocks" />
          <img id="fish" src={fish} alt="fish" />
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
