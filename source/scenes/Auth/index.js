// @flow
import queryString from 'query-string';
import { connect } from 'react-redux';

import { authCode } from 'services/auth/actions';

import type { Location } from 'react-router-dom';

type Props = {
  location: Location,
  authorize: string => void,
  readToken: string => void,
};

type Params = {
  code: string,
  isAndroid: ?string,
  isiOS: ?string,
};

const Auth = (props: Props) => {
  const { location, authorize } = props;
  const qs: Params = queryString.parse(location.search);
  const { code, isAndroid, isiOS } = qs;

  if (isAndroid) {
    window.location.assign(`hackillinois://org.hackillinois.android/auth?code=${code}`);
  } else if (isiOS) {
    window.location.assign(`hackillinois://org.hackillinois.ios/auth?code=${code}`);
  } else {
    authorize(code);
  }
  return null;
};

const mapDispatchToProps = dispatch => ({
  authorize: code => dispatch(authCode(code)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(Auth);
