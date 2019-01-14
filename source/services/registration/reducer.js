import {
  REGISTRATION_REQUEST,
  REGISTRATION_RESPONSE,
  TOUCH_DATA,
  TOUCH_RESUME,
  INVALIDATE_DATA,
} from './actions';

const initialState = {
  fetching: false,
  valid: false,
  data: null,
  resumeDirty: false,
  dataDirty: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return Object.assign({}, state, { fetching: true, valid: false });
    case REGISTRATION_RESPONSE:
      return Object.assign({}, state, {
        fetching: false,
        valid: true,
        data: action.data,
        dataDirty: false,
        resumeDirty: false,
      });
    case TOUCH_DATA:
      return Object.assign({}, state, { dataDirty: true });
    case TOUCH_RESUME:
      return Object.assign({}, state, { resumeDirty: true });
    case INVALIDATE_DATA:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default reducer;
