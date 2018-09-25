import PropTypes from 'prop-types';
import React from 'react';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-46010489-4'); //imports and initializes react packages for GA

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

function initializeReactGA() {
  ReactGA.initialize('UA-46010489-4'); //initializes Google Analytics to correct code
  ReactGA.pageview('ErrorPage'); //pageview data from goes under 'ErrorPage' on GA
}

export default ErrorPage;
