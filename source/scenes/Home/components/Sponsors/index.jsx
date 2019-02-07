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
      <h1>Our Sponsors</h1>
      <img src={WhaleIcon} className="icon" alt="Whale Icon" />
      <div className="sponsor-group">
        <img src={Fulcrum} className="logo logo-xl" alt="Fulcrum GT Logo" />
      </div>
      <img src={SquidIcon} className="icon" alt="Squid Icon" />
      <div className="sponsor-group">
        <img src={Optum} className="logo logo-l" alt="Optum Logo" />
        <img src={IMC} className="logo logo-l" alt="IMC Logo" />
        <img src={Caterpillar} className="logo logo-cat" alt="Caterpillar Logo" />
        <img src={Amadeus} className="logo logo-cat" alt="Amadeus Logo" />
      </div>
      <img src={JellyIcon} className="icon" alt="Jelly Icon" />
      <div className="sponsor-group">
        <img src={Facebook} className="logo logo-m" alt="Facebook Logo" />
        <img src={Jackson} className="logo logo-m" alt="Jackson Logo" />
        <img src={Schlum} className="logo logo-m" alt="Schlumberger Logo" />
        <img src={Google} className="logo logo-m" alt="Google Logo" />
        <img src={C1} className="logo logo-m" alt="Capital One Logo" />
        <img src={SNL} className="logo logo-m" alt="Sandia National LabsLogo" />
      </div>
      <img src={PlanktonIcon} className="icon" alt="Plankton Icon" />
      <div className="sponsor-group plankton">
        <img src={TwoSigma} className="logo logo-cat" alt="TwoSigma Logo" />
        <img src={Citadel} className="logo logo-xs" alt="Citadel Logo" />
        <img src={RC} className="logo logo-s" alt="Rockwell Collins Logo" />
        <img src={Mozilla} className="logo logo-s" alt="Mozilla Logo" />
      </div>
      <img src={ClamIcon} className="icon" alt="Clam Icon" />
      <div className="sponsor-group">
        <img src={npmLogo} className="logo logo-s" alt="NPM Logo" />
        <img src={Zeit} className="logo logo-s" alt="Zeit Logo" />
        <img src={Particle} className="logo logo-s" alt="Particle Logo" />
        <img src={Nvisia} className="logo logo-s" alt="Nvisia Logo" />
      </div>
    </div>
  </div>
);

export default Sponsors;
