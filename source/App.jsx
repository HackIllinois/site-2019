import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Error from 'scenes/Error';
import Home from 'scenes/Home';
import Sponsor from 'scenes/Sponsor';
import Internal_Brian from 'scenes/Internal_Brian';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sponsor" component={Sponsor} />
      <Route path="/404" component={Internal_Brian} />
      <Route component={() => <Error message="404 Not Found" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
