// @flow
import React from 'react';

import logo from 'assets/logo.svg';

import Footer from 'components/Footer';

import './styles.scss';

type Props = {
  message: string,
};

const ErrorPage = (props: Props) => {
  const { message } = props;
  return (
    <div className="error">
      <div className="content-wrapper">
        <div className="contents">
          <img src={logo} alt="HackIllinois Logo" />
          <h1>{message}</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
