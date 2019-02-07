// @flow
import React from 'react';

import leftRocks from 'assets/Registration/leftRocks.svg';
import rightRocks from 'assets/Registration/rightRocks.svg';
import oceanCurrents from 'assets/Registration/oceanCurrents.svg';
import fish1 from 'assets/Registration/fish_1.png';
import fish2 from 'assets/Registration/fish_2.png';

import './styles.scss';

import type { Node } from 'react';

type Props = {
  children: Node,
};

const OceanScene = (props: Props) => {
  const { children } = props;

  return (
    <section className="ocean-scene">
      {children}
      <img className="left-rocks rocks" src={leftRocks} alt="Rocks" />
      <img className="right-rocks rocks" src={rightRocks} alt="Rocks" />
      <img className="currents" src={oceanCurrents} alt="Ocean Current Lines" />
      <img className="fish1" src={fish1} alt="School of fish" />
      <img className="fish2" src={fish2} alt="School of fish" />
    </section>
  );
};

export default OceanScene;
