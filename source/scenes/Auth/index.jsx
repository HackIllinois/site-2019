// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import ErrorPage from 'scenes/Error';
import Loader from 'scenes/Loader';
import { authCode } from 'services/auth/actions';

import type { Location } from 'react-router-dom';

type Props = {
  location: Location,
  authorize: string => void,
  jwt: ?string,
  authError: ?Error,
};

type Params = {
  code: string,
  isAndroid: ?string,
  isiOS: ?string,
  to: ?string,
};

const Auth = (props: Props) => {
  const { location, authorize, authError, jwt } = props;
  const qs: Params = queryString.parse(location.search);
  const { code, isAndroid, isiOS, to } = qs;

  if (isAndroid) {
    window.location.assign(`hackillinois://org.hackillinois.android/auth?code=${code}`);
  } else if (isiOS) {
    window.location.assign(`hackillinois://org.hackillinois.ios/auth?code=${code}`);
  } else if (jwt) {
    if (to) {
      return <Redirect to={to} />;
    }
    return <Redirect to="/" />;
  } else if (authError) {
    return <ErrorPage message="Authentication Error" />;
  } else {
    authorize(code);
  }
  return <Loader />;
};

const mapStateToProps = state => ({
  authError: state.auth.error,
  jwt: state.auth.jwt,
});

const mapDispatchToProps = dispatch => ({
  authorize: code => dispatch(authCode(code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
