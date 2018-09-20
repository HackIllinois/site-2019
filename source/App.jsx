import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Error from 'scenes/Error';
import Home from 'scenes/Home';
import Sponsor from 'scenes/Sponsor';
import Bryan from 'scenes/Bryan';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sponsor" component={Sponsor} />
      <Route path="/sponsor" component={Bryan} />
      <Route component={() => <Error message="404 Not Found" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
