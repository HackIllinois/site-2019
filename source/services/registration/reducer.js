import { REGISTRATION_REQUEST, REGISTRATION_RESPONSE } from './actions';

const initialState = {
  fetching: false,
  valid: false,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return Object.assign({}, state, { fetching: true, valid: false });
    case REGISTRATION_RESPONSE:
      return Object.assign({}, state, { fetching: false, valid: true, data: action.data });
    default:
      return state;
  }
};

export default reducer;
