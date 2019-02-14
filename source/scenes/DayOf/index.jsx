// @flow
import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import type { Match } from 'react-router-dom';

import OceanScene from 'components/OceanScene';

import dayofConfig from './config.json';
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
    const { root, schedule, maps, prizes, travel, mentorship } = dayofConfig;

    return (
      <div className="dayof-wrapper">
        <div className={`dayof ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebar setSidebar={this.setSidebar} />
          <OceanScene>
            <div className="view-upper">
              <div className="view-wrapper">
                <Route
                  path={`${match.url}`}
                  exact
                  component={() => <Redirect to={`${match.url}${root}`} />}
                />
                {schedule && <Route path={`${match.url}schedule`} exact component={Schedule} />}
                {maps && <Route path={`${match.url}maps`} exact component={Maps} />}
                {prizes && <Route path={`${match.url}prizes`} exact component={Prizes} />}
                {travel && <Route path={`${match.url}travel`} exact component={Travel} />}
                {mentorship && (
                  <Route path={`${match.url}mentorship`} exact component={Mentorship} />
                )}
              </div>
            </div>
          </OceanScene>
        </div>
      </div>
    );
  }
}

export default withRouter(DayOf);
