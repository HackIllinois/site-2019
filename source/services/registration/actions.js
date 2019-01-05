import { fetchRegistrationData } from 'services/api/registration';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_RESPONSE = 'REGISTRATION_RESPONSE';
export const TOUCH_RESUME = 'TOUCH_RESUME';
export const TOUCH_DATA = 'TOUCH_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';

function requestRegistration() {
  return {
    type: REGISTRATION_REQUEST,
  };
}

function receiveRegistration(data) {
  return {
    type: REGISTRATION_RESPONSE,
    data,
  };
}

export function getRegistrationData() {
  return dispatch => {
    dispatch(requestRegistration());
    fetchRegistrationData()
      .then(data => dispatch(receiveRegistration(data)))
      .catch(() => dispatch(receiveRegistration(null)));
  };
}

export function touchResume() {
  return {
    type: TOUCH_RESUME,
  };
}

export function touchData() {
  return {
    type: TOUCH_DATA,
  };
}

export function invalidateData() {
  return {
    type: INVALIDATE_DATA,
  };
}
