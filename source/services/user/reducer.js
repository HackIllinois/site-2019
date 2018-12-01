import jwtDecode from 'jwt-decode';

import { READ_JWT } from './actions';

const initialState = {
  email: null,
  id: null,
  roles: [],
};

function readJWT(state, jwt) {
  const { email, id, roles } = jwtDecode(jwt);
  return Object.assign({}, state, { email, id, roles });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_JWT:
      return readJWT(state, action.jwt);
    default:
      return state;
  }
};

export default reducer;
