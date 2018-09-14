import PropTypes from 'prop-types';
import React from 'react';

import Logo from 'assets/Logo.svg';

import Footer from 'components/Footer';

import './styles.scss';

const ErrorPage = props => {
  const { message } = props;
  return (
    <div className="error">
      <div className="content-wrapper">
        <div className="contents">
          <img src={Logo} alt="HackIllinois Logo" />
          <h1>{message}</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPage;
