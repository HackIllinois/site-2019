// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import FulcrumLogo from 'assets/fulcrum.png';
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

import caveOne from 'assets/Home/cave-one.svg';
import caveTwo from 'assets/Home/cave-two.svg';
import caveThree from 'assets/Home/cave-three.svg';
import caveFour from 'assets/Home/cave-four.svg';
import squid from 'assets/Home/squid.svg';

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

      <div className="title-logo-wrapper">
        <img className="fulcrum-logo" src={FulcrumLogo} alt="Fulcrum GT Logo" />
      </div>

      <div className="buttons">
        <Link className="button-blue" to="/apply">
          Apply
        </Link>
      </div>

      <img className="fish-1" src={fish} alt="fish" />
      <img className="fish-2" src={fish} alt="fish" />

      <div className="rocks">
        <div className="info">
          <h2>Open Source</h2>
          <p>
            HackIllinois is redefining the collegiate hackathon as the first entirely open source
            hackathon. Students work with experienced open source mentors over 36 hours to
            contribute to open source through new features, bug fixes, and documentation changes.
          </p>
          <h2>The Event</h2>
          <p>
            This year, only groups who work with a mentor on an open source contribution and add a
            license will be eligible to win prizes. Contribute to a useful open source tool that you
            use, an open source project of your own, or join a team led by an open source mentor.
          </p>
          <h2>Join Us</h2>
          <p>
            <b>Interested in contributing to open source?</b> Be sure to apply for your chance to
            attend. <b>Really want to come?</b> Complete our{' '}
            <a href="http://go.hackillinois.org/opensourcechallenge">Open Source Challenge</a> for
            guaranteed admission to HackIllinois 2019. It’s simple—just make one PR to any project
            between December 1, 2018 and the close of applications. <b>New to open source?</b> No
            problem. Our workshops and mentors will help guide you through the intricacies of open
            source, from licensing to making your first PR (pull request).
          </p>
        </div>

        <img className="mid-top-half" src={midTopHalf} alt="rocks" />
        <FAQ />

        <div id="caves">
          <img className="front-cave" src={caveOne} alt="Cave one" />
          <img className="front-mid-cave" src={caveTwo} alt="Cave two" />
          <img className="back-mid-cave" src={caveThree} alt="Cave three" />
          <img className="back-cave" src={caveFour} alt="Cave four" />
          {/* <img id="fish" src={fish} alt="fish" /> */}
        </div>
        {/* <div className="floor">
          <img className="ocean-arch" src={oceanArch} alt="Rock arch" />
          <img className="ocean-floor" src={oceanFloor} alt="Ocean Floor" />  
        </div> */}
      </div>
    </div>
  </div>
);

export default Home;
