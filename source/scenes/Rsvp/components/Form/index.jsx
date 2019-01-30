// @flow
import React, { Component } from 'react';
import anime from 'animejs';

import leftRocks from 'assets/Registration/leftRocks.svg';
import rightRocks from 'assets/Registration/rightRocks.svg';
import oceanCurrents from 'assets/Registration/oceanCurrents.svg';
import fish1 from 'assets/Registration/fish_1.png';
import fish2 from 'assets/Registration/fish_2.png';

import GeneralInfo from './Panes/GeneralInfo';
import LanguageInfo from './Panes/LanguageInfo';
import TechInterests from './Panes/TechInterests';
import OpenSource from './Panes/OpenSource';
import Submit from './Panes/Submit';

import './styles.scss';

const NUM_PANES = 5;

type Props = {
  pane: number,
  setPane: number => void,
};

class ScrollableForm extends Component<Props> {
  constructor() {
    super();

    this.prevPane = this.prevPane.bind(this);
    this.nextPane = this.nextPane.bind(this);
  }

  componentDidMount() {
    const formView = document.getElementById('form-view');
    if (formView) {
      setTimeout(() => {
        anime({
          targets: '.nav-buttons',
          opacity: 1,
          top: [formView.clientHeight, formView.clientHeight + 15],
          duration: 200,
          easing: 'easeOutQuad',
        });
      }, 10);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { pane } = this.props;
    if (pane !== prevProps.pane) {
      // Animate button location
      const formView = document.getElementById('form-view');
      if (formView) {
        setTimeout(() => {
          anime({
            targets: '.nav-buttons',
            top: formView.clientHeight + 15,
            duration: 200,
            easing: 'easeOutQuad',
          });
        }, 200);
      }
    }
  }

  prevPane: () => void;
  prevPane() {
    const { pane, setPane } = this.props;
    setPane(pane - 1);
  }

  nextPane: () => void;
  nextPane() {
    const { pane, setPane } = this.props;
    setPane(pane + 1);
  }

  render() {
    const { pane } = this.props;

    return (
      <section className="scrollable-form">
        <h1>RSVP</h1>

        <div id="form-view">
          <div id="form-view-container">
            <GeneralInfo visible={pane === 0} />
            <LanguageInfo visible={pane === 1} />
            <TechInterests visible={pane === 2} />
            <OpenSource visible={pane === 3} />
            <Submit visible={pane === 4} />
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

        <img className="left-rocks rocks" src={leftRocks} alt="Rocks" />
        <img className="right-rocks rocks" src={rightRocks} alt="Rocks" />
        <img className="currents" src={oceanCurrents} alt="Ocean Current Lines" />
        <img className="fish1" src={fish1} alt="School of fish" />
        <img className="fish2" src={fish2} alt="School of fish" />
      </section>
    );
  }
}

export default ScrollableForm;
