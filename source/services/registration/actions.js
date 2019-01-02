import { fetchRegistrationData } from 'services/api/registration';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_RESPONSE = 'REGISTRATION_RESPONSE';

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
