import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Error from 'scenes/Error';
import Home from 'scenes/Home';
import PDFView from 'scenes/PDFView';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sponsor" component={PDFView('/assets/sponsorship-2019.pdf')} />
      <Route exact path="/mentor" component={PDFView('/assets/mentorship-2019.pdf')} />
      <Route component={() => <Error message="404 Not Found" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
