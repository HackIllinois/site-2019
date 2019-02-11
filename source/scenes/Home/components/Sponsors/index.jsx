import React from 'react';

import WhaleIcon from 'assets/Icons/whale.svg';
import SquidIcon from 'assets/Icons/squid.svg';
import JellyIcon from 'assets/Icons/jelly.svg';
import PlanktonIcon from 'assets/Icons/plankton.svg';
import ClamIcon from 'assets/Icons/clam.svg';
import Fulcrum from 'assets/Logos/Fulcrum.png';
import Optum from 'assets/Logos/Optum.png';
import IMC from 'assets/Logos/IMC.png';
import Caterpillar from 'assets/Logos/Caterpillar.png';
import Amadeus from 'assets/Logos/Amadeus.png';
import Facebook from 'assets/Logos/Facebook.png';
import Jackson from 'assets/Logos/Jackson.png';
import Schlum from 'assets/Logos/Schlum.png';
import Google from 'assets/Logos/Google.png';
import C1 from 'assets/Logos/C1.png';
import SNL from 'assets/Logos/SNL.png';
import TwoSigma from 'assets/Logos/TwoSigma.png';
import Citadel from 'assets/Logos/Citadel.png';
import RC from 'assets/Logos/RC.png';
import Mozilla from 'assets/Logos/Mozilla.png';
import npmLogo from 'assets/Logos/npm.svg';
import Zeit from 'assets/Logos/Zeit.svg';
import Particle from 'assets/Logos/Particle.png';
import Nvisia from 'assets/Logos/Nvisia.png';

import './styles.scss';

const Sponsors = () => (
  <div className="sponsor-wrapper">
    <div className="sponsors">
      <img src={WhaleIcon} className="icon" alt="Whale Icon" />
      <div className="sponsor-group">
        <a href="https://fulcrumgt.com/">
          <img src={Fulcrum} className="logo logo-xl" alt="Fulcrum GT Logo" />
        </a>
      </div>
      <img src={SquidIcon} className="icon" alt="Squid Icon" />
      <div className="sponsor-group">
        <a href="https://www.optum.com/">
          <img src={Optum} className="logo logo-l" alt="Optum Logo" />
        </a>
        <a href="https://www.imc.com/">
          <img src={IMC} className="logo logo-l" alt="IMC Logo" />
        </a>
        <a href="https://www.caterpillar.com/">
          <img src={Caterpillar} className="logo logo-cat" alt="Caterpillar Logo" />
        </a>
        <a href="https://amadeus.com/en">
          <img src={Amadeus} className="logo logo-cat" alt="Amadeus Logo" />
        </a>
      </div>
      <img src={JellyIcon} className="icon" alt="Jelly Icon" />
      <div className="sponsor-group">
        <a href="https://www.facebook.com/">
          <img src={Facebook} className="logo logo-m" alt="Facebook Logo" />
        </a>
        <a href="https://www.jackson.com/">
          <img src={Jackson} className="logo logo-m" alt="Jackson Logo" />
        </a>
        <a href="https://www.slb.com/">
          <img src={Schlum} className="logo logo-m" alt="Schlumberger Logo" />
        </a>
        <a href="https://www.google.com/">
          <img src={Google} className="logo logo-m" alt="Google Logo" />
        </a>
        <a href="https://www.capitalone.com/">
          <img src={C1} className="logo logo-m" alt="Capital One Logo" />
        </a>
        <a href="https://www.sandia.gov/">
          <img src={SNL} className="logo logo-m" alt="Sandia National LabsLogo" />
        </a>
      </div>
      <img src={PlanktonIcon} className="icon" alt="Plankton Icon" />
      <div className="sponsor-group plankton">
        <a href="https://www.twosigma.com/">
          <img src={TwoSigma} className="logo logo-cat" alt="TwoSigma Logo" />
        </a>
        <a href="https://www.citadel.com/">
          <img src={Citadel} className="logo logo-xs" alt="Citadel Logo" />
        </a>
        <a href="https://www.rockwellcollins.com/">
          <img src={RC} className="logo logo-s" alt="Rockwell Collins Logo" />
        </a>
        <a href="https://www.mozilla.org/en-US/">
          <img src={Mozilla} className="logo logo-s" alt="Mozilla Logo" />
        </a>
      </div>
      <img src={ClamIcon} className="icon" alt="Clam Icon" />
      <div className="sponsor-group">
        <a href="https://www.npmjs.com/">
          <img src={npmLogo} className="logo logo-s" alt="NPM Logo" />
        </a>
        <a href="https://zeit.co/">
          <img src={Zeit} className="logo logo-s" alt="Zeit Logo" />
        </a>
        <a href="https://www.particle.io/">
          <img src={Particle} className="logo logo-s" alt="Particle Logo" />
        </a>
        <a href="https://www.nvisia.com/">
          <img src={Nvisia} className="logo logo-s" alt="Nvisia Logo" />
        </a>
      </div>
    </div>
  </div>
);

export default Sponsors;
