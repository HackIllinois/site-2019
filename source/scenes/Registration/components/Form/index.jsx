import React from 'react';

import TextField from '../TextField';
import './styles.scss';

const ScrollableForm = () => (
  <section className="scrollable-form">
    <h1>Registration</h1>

    <div className="form-view">
      <TextField label="Preferred Name" name="name" placeholder="Type in your preferred name" />
    </div>
  </section>
);

export default ScrollableForm;
