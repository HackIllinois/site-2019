import React, { Component } from 'react';
import anime from 'animejs';

import starfish from 'assets/Home/starfish.png';
import arrow from 'assets/arrow.svg';

import General from './General';
import Before from './Before';
import During from './During';
import After from './After';

import './styles.scss';

class FAQ extends Component {
  constructor() {
    super();

    this.state = {
      section: 0,
    };

    this.changeSection = this.changeSection.bind(this);
    this.incSection = this.incSection.bind(this);
    this.decSection = this.decSection.bind(this);
  }

  changeSection(newSection) {
    return () => {
      const { section } = this.state;

      const offset = newSection < section ? 60 : -60;
      if (newSection !== section) {
        anime({
          targets: '#starfish',
          translateY: [
            { value: offset, duration: 300, easing: 'easeOutQuad' },
            { value: 0, duration: 300, easing: 'easeInQuad' },
          ],
          rotate: {
            duration: 600,
            value: [0, 360],
            easing: 'linear',
          },
        });
      }
      this.setState({ section: newSection });
    };
  }

  incSection() {
    this.setState(prevState => ({
      section: Math.min(prevState.section + 1, 3),
    }));
  }

  decSection() {
    this.setState(prevState => ({
      section: Math.max(prevState.section - 1, 0),
    }));
  }

  render() {
    const { section } = this.state;
    const sliderStyle = {
      left: `-${section * 100}vw`,
    };
    const starfishStyle = {
      left: `calc(${section * 25 + 12}% - 105px)`,
    };

    return (
      <div className="mid-content">
        <div className="headers headers-wide faq-container">
          <img id="starfish" src={starfish} alt="starfish" style={starfishStyle} />
          <div id="header-1" className="column-header">
            <button type="button" onClick={this.changeSection(0)}>
              <h3 className={section === 0 ? 'active' : 'inactive'}>General</h3>
            </button>
          </div>

          <div id="header-2" className="column-header">
            <button type="button" onClick={this.changeSection(1)}>
              <h3 className={section === 1 ? 'active' : 'inactive'}>Before</h3>
            </button>
          </div>

          <div id="header-3" className="column-header">
            <button type="button" onClick={this.changeSection(2)}>
              <h3 className={section === 2 ? 'active' : 'inactive'}>During</h3>
            </button>
          </div>

          <div id="header-4" className="column-header">
            <button type="button" onClick={this.changeSection(3)}>
              <h3 className={section === 3 ? 'active' : 'inactive'}>After</h3>
            </button>
          </div>
        </div>

        <div className="headers headers-narrow">
          <div className="faq">
            <div className="slider" style={sliderStyle}>
              <h3 className="faq-pane">General</h3>
              <h3 className="faq-pane">Before</h3>
              <h3 className="faq-pane">During</h3>
              <h3 className="faq-pane">After</h3>
            </div>
          </div>

          <button type="button" className="arrow left-arrow" onClick={this.decSection}>
            <img src={arrow} alt="left-arrow" className={section === 0 ? 'hide' : 'show'} />
          </button>
          <button type="button" className="arrow right-arrow" onClick={this.incSection}>
            <img src={arrow} alt="right-arrow" className={section === 3 ? 'hide' : 'show'} />
          </button>
        </div>

        <section className="faq">
          <div className="slider" style={sliderStyle}>
            <General />
            <Before />
            <During />
            <After />
          </div>
        </section>
      </div>
    );
  }
}

export default FAQ;
