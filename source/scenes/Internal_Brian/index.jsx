import PropTypes from 'prop-types';
import React from 'react';

import Logo from 'assets/Logo.svg';

import Footer from 'components/Footer';

import './styles.scss';

const Internal_Brian = props => {
  return (
    <div className="error">
      <div className="content-wrapper">
        <div className="contents">
          <img src={Logo} alt="HackIllinois Logo" />
          <h1>(Error msg from Brian Y.)</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Internal_Brian;
