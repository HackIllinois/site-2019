import React from 'react';

import StudentInfo from '../../scenes/StudentInfo';
import './styles.scss';

const ScrollableForm = () => (
  <section className="scrollable-form">
    <h1>Registration</h1>

    <div className="form-view">
      <StudentInfo />
    </div>
  </section>
);

export default ScrollableForm;
