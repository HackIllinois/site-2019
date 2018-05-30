import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'scenes/Home';
import Error from 'scenes/Error';

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
