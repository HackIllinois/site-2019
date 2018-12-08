import React, { Component } from 'react';

import PersonalInfo from './PersonalInfo';
import StudentInfo from './StudentInfo';
import './styles.scss';

const NUM_PANES = 2;

class ScrollableForm extends Component {
  constructor() {
    super();
    this.state = {
      pane: 0,
    };

    this.prevPane = this.prevPane.bind(this);
    this.nextPane = this.nextPane.bind(this);
  }

  prevPane() {
    this.setState(prevState => ({
      pane: prevState.pane - 1,
    }));
  }

  nextPane() {
    this.setState(prevState => ({
      pane: prevState.pane + 1,
    }));
  }

  render() {
    const { pane } = this.state;

    return (
      <section className="scrollable-form">
        <h1>Registration</h1>

        <div className="form-view">
          <StudentInfo visible={pane === 0} />
          <PersonalInfo visible={pane === 1} />
        </div>

        <div className="nav-buttons">
          <button type="button" onClick={this.prevPane} disabled={pane === 0}>
            Back
          </button>

          <button type="button" onClick={this.nextPane} disabled={pane === NUM_PANES - 1}>
            Next
          </button>
        </div>
      </section>
    );
  }
}

export default ScrollableForm;
