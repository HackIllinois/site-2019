import React from 'react';

import Logo from 'assets/Logo.svg';

import Footer from 'components/Footer';

import './styles.scss';

const Josh = () => (
  <div className="error">
    <div className="content-wrapper">
      <div className="contents">
        <img src={Logo} alt="HackIllinois Logo" />
        <h1>Josh</h1>
      </div>
      <Footer />
    </div>
  </div>
);

export default Josh;
