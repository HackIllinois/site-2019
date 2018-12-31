// @flow
import React from 'react';

import starfish from 'assets/Home/starfish.png';

import './styles.scss';

const Loader = () => (
  <div className="loading ocean-screen">
    <div className="load-wrapper">
      <img src={starfish} alt="Starfish" />
    </div>
    <h1>Loading...</h1>
  </div>
);

export default Loader;
