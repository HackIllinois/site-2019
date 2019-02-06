import {
  RSVP_REQUEST,
  RSVP_RESPONSE,
  TOUCH_DATA,
  INVALIDATE_DATA,
  DECISION_RESPONSE,
} from './actions';

const initialState = {
  fetching: false,
  valid: false,
  data: null,
  dataDirty: false,
  accepted: null,
  decisionValid: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RSVP_REQUEST:
      return Object.assign({}, state, { fetching: true, valid: false });
    case RSVP_RESPONSE:
      return Object.assign({}, state, {
        fetching: false,
        valid: true,
        data: action.data,
        dataDirty: false,
        resumeDirty: false,
      });
    case TOUCH_DATA:
      return Object.assign({}, state, { dataDirty: true });
    case INVALIDATE_DATA:
      return Object.assign({}, initialState);
    case DECISION_RESPONSE:
      return Object.assign({}, state, {
        decisionValid: true,
        accepted: action.decision === 'ACCEPTED',
      });
    default:
      return state;
  }
};

export default reducer;
