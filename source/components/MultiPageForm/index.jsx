// @flow
import React, { Component } from 'react';
import anime from 'animejs';

import type { ElementRef } from 'react';

import leftRocks from 'assets/Registration/leftRocks.svg';
import rightRocks from 'assets/Registration/rightRocks.svg';
import oceanCurrents from 'assets/Registration/oceanCurrents.svg';
import fish1 from 'assets/Registration/fish_1.png';
import fish2 from 'assets/Registration/fish_2.png';

import FormTransition from './FormTransition';

import './styles.scss';

type Props = {
  pane: number,
  setPane: number => void,
  panes: () => void,
  title: string,
};

class ScrollableForm extends Component<Props> {
  constructor() {
    super();

    this.prevPane = this.prevPane.bind(this);
    this.nextPane = this.nextPane.bind(this);

    this.formViewRef = React.createRef();
  }

  componentDidMount() {
    const { clientHeight } = this.formViewRef.current;
    setTimeout(() => {
      anime({
        targets: '.nav-buttons',
        opacity: 1,
        top: [clientHeight, clientHeight + 15],
        duration: 200,
        easing: 'easeOutQuad',
      });
    }, 10);
  }

  componentDidUpdate(prevProps: Props) {
    const { pane } = this.props;
    if (pane !== prevProps.pane) {
      // Animate button location
      setTimeout(() => {
        const { clientHeight } = this.formViewRef.current;
        anime({
          targets: '.nav-buttons',
          top: clientHeight + 15,
          duration: 200,
          easing: 'easeOutQuad',
        });
      }, 200);
    }
  }

  formViewRef: ElementRef<any>;

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
    const { pane, panes, title } = this.props;

    return (
      <section className="scrollable-form">
        <h1>{title}</h1>

        <div id="form-view" ref={this.formViewRef}>
          <div id="form-view-container">
            {panes.map((Cur, i) => (
              <FormTransition visible={pane === i} uid={Cur.uid} key={Cur.uid}>
                <Cur.component visible={pane === i} />
              </FormTransition>
            ))}
          </div>

          <div className="nav-buttons">
            <button type="button" onClick={this.prevPane} disabled={pane === 0}>
              Back
            </button>

            <div className="spacing" />

            <button type="button" onClick={this.nextPane} disabled={pane === panes.length - 1}>
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
