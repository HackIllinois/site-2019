import authenticateCode from 'services/api/auth';

import { readJWT } from '../user/actions';
import { setError } from '../error/actions';

export const AUTH_CODE_REQUEST = 'AUTH_CODE_REQUEST';
export const AUTH_CODE_FAILURE = 'AUTH_CODE_FAILURE';
export const AUTH_CODE_SUCCESS = 'AUTH_CODE_SUCCESS';

function requestAuth() {
  return {
    type: AUTH_CODE_REQUEST,
  };
}

function receiveAuth(err, data) {
  if (err) {
    return {
      type: AUTH_CODE_FAILURE,
      err,
    };
  }
  return {
    type: AUTH_CODE_SUCCESS,
    jwt: data.token,
  };
}

export function authCode(code) {
  return dispatch => {
    dispatch(requestAuth());
    authenticateCode(code)
      .then(data => {
        dispatch(receiveAuth(null, data));
        dispatch(readJWT(data.token));
      })
      .catch(err => {
        dispatch(receiveAuth(err, null));
        dispatch(setError('OAuth Error'));
      });
  };
}
