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
            <Select
              label="Have you attended HackIllinois in the past?"
              placeholder="Yes or No"
              items={yn}
              onSelect={registerField('priorAttendance')}
              disableInput
              index={data.priorAttendance}
            />
            <TextField
              label="Anything else you’d like us to know?"
              name="extraInfo"
              placeholder="Type in any other considerations"
              value={data.extraInfo}
              onChange={registerField('extraInfo')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default OtherInfo;
