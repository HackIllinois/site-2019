import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import errorReducer from './error/reducer';
import registrationReducer from './registration/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  registration: registrationReducer,
  user: userReducer,
});

let store;

if (process.env.TRAVIS_BRANCH === 'master') {
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
