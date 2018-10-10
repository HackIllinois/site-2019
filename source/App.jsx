// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Error from 'scenes/Error';
import Home from 'scenes/Home';
import Sponsor from 'scenes/Sponsor';

import { RouteTracker } from './services/GoogleAnalytics';
import './styles.scss';

ReactGA.initialize('UA-46010489-4');

const App = () => (
  <BrowserRouter>
    <div>
      <RouteTracker />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sponsor" component={Sponsor} />
        <Route component={() => <Error message="404 Not Found" />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
