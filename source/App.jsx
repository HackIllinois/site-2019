import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'scenes/Home';
import Error from 'scenes/Error';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={() => <Error message="404 Not Found" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
