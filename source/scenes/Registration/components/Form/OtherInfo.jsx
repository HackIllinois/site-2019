// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from './FormTransition';
import FormContext from '../../FormContext';

const yn = [{ text: 'Yes' }, { text: 'No' }];

type Props = {
  visible: boolean,
};

const OtherInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, registerField }) => (
          <div className="scrolled-form">
            <TextField
              label="Preferred Name"
              name="preferredName"
              placeholder="Type in your preferred name"
              value={data.preferredName}
              onChange={registerField('preferredName')}
            />
            <Select
              label="Have you attended HackIllinois in the past?"
              placeholder="Yes or No"
              items={yn}
              onSelect={registerField('previousAttendee')}
              disableInput
              index={-1}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default OtherInfo;
