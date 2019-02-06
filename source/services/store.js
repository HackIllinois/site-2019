import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import errorReducer from './error/reducer';
import registrationReducer from './registration/reducer';
import userReducer from './user/reducer';
import rsvpReducer from './rsvp/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  registration: registrationReducer,
  user: userReducer,
  rsvp: rsvpReducer,
});

let middleware;

if (process.env.TRAVIS_BRANCH === 'master') {
  middleware = applyMiddleware(thunk);
} else {
  middleware = applyMiddleware(thunk, logger);
}

const store = createStore(rootReducer, middleware);
export default store;
