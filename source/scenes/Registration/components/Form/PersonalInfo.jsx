// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';

import FormTransition from './FormTransition';
import FormContext from '../../FormContext';

const shirtSizes = [
  { text: 'Small' },
  { text: 'Medium' },
  { text: 'Large' },
  { text: 'Extra-Large' },
];

type Props = {
  visible: boolean,
};

const PersonalInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="personal-info">
      <FormContext.Consumer>
        {({ data, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Shirt Size"
              placeholder="Select a size"
              items={shirtSizes}
              onSelect={registerField('shirtSize')}
              disableInput
              index={2}
            />
            <TextField
              label="Phone"
              name="phone"
              placeholder="123 456 7890"
              value={data.phoneNumber}
              onChange={registerField('phoneNumber')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default PersonalInfo;
