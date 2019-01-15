import { AUTH_CODE_REQUEST, AUTH_CODE_SUCCESS, AUTH_CODE_FAILURE } from './actions';

const initialState = {
  fetching: false,
  error: null,
  jwt: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CODE_REQUEST:
      return Object.assign({}, state, { fetching: true, error: null, jwt: null });
    case AUTH_CODE_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: null, jwt: action.jwt });
    case AUTH_CODE_FAILURE:
      return Object.assign({}, state, { fetching: false, error: action.err, user: null });
    default:
      return state;
  }
};

export default reducer;
