import store from '../store';

export default function registerUser(data) {
  return fetch('/registration/attendee', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: store.getState().auth.jwt,
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return response.json();
  });
}
