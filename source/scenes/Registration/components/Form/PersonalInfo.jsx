// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';

const shirtSizes = [
  { text: 'Small' },
  { text: 'Medium' },
  { text: 'Large' },
  { text: 'Extra-Large' },
];

const PersonalInfo = () => (
  <div className="scrolled-form">
    <Select
      label="Shirt Size"
      tip="Select a size"
      items={shirtSizes}
      onSelect={s => console.log(s)}
    />
    <TextField label="Phone" name="phone" placeholder="123 456 7890" />
  </div>
);

export default PersonalInfo;
