// @flow
import React from 'react';

import TextField from '../components/TextField';

const Other = () => (
  <div className="scrolled-form">
    <TextField label="Major" name="major" placeholder="Type in your major" />
    <TextField
      label="Graduation Year"
      name="grad_year"
      placeholder="Which year are you graduating?"
    />
  </div>
);

export default Other;
