import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import errorReducer from './error/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
