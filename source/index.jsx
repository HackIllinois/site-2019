import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './services/store';
import { setJWT } from './services/auth/actions';
import { readJWT } from './services/user/actions';

import App from './App';

if (process.env.NODE_ENV === 'development') {
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
