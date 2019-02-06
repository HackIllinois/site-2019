import { fetchRsvpData, fetchDecision } from 'services/api/rsvp';

export const RSVP_REQUEST = 'RSVP_REQUEST';
export const RSVP_RESPONSE = 'RSVP_RESPONSE';
export const TOUCH_DATA = 'TOUCH_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';
export const DECISION_RESPONSE = 'DECISION_RESPONSE';

function requestRsvp() {
  return {
    type: RSVP_REQUEST,
  };
}

function receiveRsvp(data) {
  return {
    type: RSVP_RESPONSE,
    data,
  };
}

export function getRsvpData() {
  return dispatch => {
    dispatch(requestRsvp());
    fetchRsvpData().then(data => dispatch(receiveRsvp(data)), () => dispatch(receiveRsvp(null)));
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

export function recieveDecision(decision) {
  return {
    type: DECISION_RESPONSE,
    decision,
  };
}

export function getDecision() {
  return dispatch => {
    fetchDecision().then(
      data => dispatch(recieveDecision(data.status)),
      () => dispatch(recieveDecision(null)),
    );
  };
}
