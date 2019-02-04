// @flow
import React, { Component } from 'react';
import anime from 'animejs';

import type { Node } from 'react';

type Props = {
  uid: string,
  visible: boolean,
  children: Node,
};

type State = {
  hidden: boolean,
};

const ANIMATION_DURATION = 150;

class FormTransition extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hidden: !props.visible,
    };
  }

  componentDidMount() {
    const { uid, visible } = this.props;
    if (visible) {
      anime({
        targets: `#${uid}`,
        opacity: [0, 1],
        left: [-30, 0],
        delay: 200,
        duration: ANIMATION_DURATION,
        easing: 'linear',
      });
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { visible, uid } = this.props;
    if (!visible && prevProps.visible) {
      // Transition out
      anime({
        targets: `#${uid}`,
        opacity: [1, 0],
        left: [0, 30],
        duration: ANIMATION_DURATION,
        easing: 'linear',
        complete: () => {
          this.setState({ hidden: true });
        },
      });
    } else if (visible && !prevProps.visible) {
      // Transition in
      setTimeout(() => {
        this.setState({ hidden: false });
      }, ANIMATION_DURATION);
      setTimeout(() => {
        anime({
          targets: `#${uid}`,
          opacity: [0, 1],
          left: [-30, 0],
          duration: ANIMATION_DURATION,
          easing: 'linear',
        });
      }, ANIMATION_DURATION + 200);
    }
  }

  render() {
    const { uid, children } = this.props;
    const { hidden } = this.state;
    return (
      <div className={hidden ? 'form-transition hidden' : 'form-transition'} id={uid}>
        {children}
      </div>
    );
  }
}

export default FormTransition;
