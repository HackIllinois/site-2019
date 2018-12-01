import { SET_ERROR } from './actions';

const initialState = {
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};

export default reducer;
