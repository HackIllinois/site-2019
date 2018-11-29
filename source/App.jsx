// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Error from 'scenes/Error';
import Home from 'scenes/Home';
import PDFView from 'scenes/PDFView';
import Registration from 'scenes/Registration';

import { RouteTracker } from './services/GoogleAnalytics';
import './styles/reset.css';
import './styles/base.scss';

ReactGA.initialize('UA-46010489-4');

const App = () => (
  <BrowserRouter>
    <div>
      <RouteTracker />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/sponsor" component={PDFView('/assets/sponsorship-2019.pdf')} />
        <Route exact path="/mentor" component={PDFView('/assets/mentorship-2019.pdf')} />
        <Route component={() => <Error message="404 Not Found" />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
