// @flow
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import type { Match } from 'react-router-dom';

import OceanScene from 'components/OceanScene';

import Sidebar from './components/Sidebar';
import Schedule from './scenes/Schedule';
import Maps from './scenes/Maps';
import Prizes from './scenes/Prizes';
import Travel from './scenes/Travel';
import Mentorship from './scenes/Mentorship';

import './styles.scss';

type Props = {
  match: Match,
};
type State = {
  open: boolean,
};

class DayOf extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.setSidebar = this.setSidebar.bind(this);
  }

  setSidebar: boolean => void;
  setSidebar(open: boolean) {
    this.setState({
      open,
    });
  }

  render() {
    const { match } = this.props;
    const { open } = this.state;

    return (
      <div className="dayof-wrapper">
        <div className={`dayof ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebar setSidebar={this.setSidebar} />
          <OceanScene>
            <Route path={`${match.url}`} exact component={Schedule} />
            <Route path={`${match.url}maps`} exact component={Maps} />
            <Route path={`${match.url}prizes`} exact component={Prizes} />
            <Route path={`${match.url}travel`} exact component={Travel} />
            <Route path={`${match.url}mentorship`} exact component={Mentorship} />
          </OceanScene>
        </div>
      </div>
    );
  }
}

export default withRouter(DayOf);
