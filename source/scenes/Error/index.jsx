// @flow
import React from 'react';

import Logo from 'assets/Logo.svg';

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
          <img src={Logo} alt="HackIllinois Logo" />
          <h1>{message}</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
