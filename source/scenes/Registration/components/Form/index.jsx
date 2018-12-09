// @flow
import React, { Component } from 'react';
import anime from 'animejs';

import PersonalInfo from './PersonalInfo';
import StudentInfo from './StudentInfo';
import './styles.scss';

const NUM_PANES = 2;

type Props = {};
type State = {
  pane: number,
};

class ScrollableForm extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      pane: 0,
    };

    this.prevPane = this.prevPane.bind(this);
    this.nextPane = this.nextPane.bind(this);
  }

  componentDidMount() {
    const formView = document.getElementById('form-view-container');
    if (formView) {
      setTimeout(() => {
        anime({
          targets: '.nav-buttons',
          opacity: 1,
          top: [formView.clientHeight + 50, formView.clientHeight + 70],
          duration: 200,
          easing: 'easeOutQuad',
        });
      }, 10);
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { pane } = this.state;
    if (pane !== prevState.pane) {
      // Animate button location
      const formView = document.getElementById('form-view-container');
      if (formView) {
        setTimeout(() => {
          anime({
            targets: '.nav-buttons',
            top: formView.clientHeight + 70,
            duration: 200,
            easing: 'easeOutQuad',
          });
        }, 200);
      }
    }
  }

  prevPane: () => void;
  prevPane() {
    this.setState(prevState => ({
      pane: prevState.pane - 1,
    }));
  }

  nextPane: () => void;
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
          <div id="form-view-container">
            <StudentInfo visible={pane === 0} />
            <PersonalInfo visible={pane === 1} />
          </div>

          <div className="nav-buttons">
            <button type="button" onClick={this.prevPane} disabled={pane === 0}>
              Back
            </button>

            <div className="spacing" />

            <button type="button" onClick={this.nextPane} disabled={pane === NUM_PANES - 1}>
              Next
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ScrollableForm;
