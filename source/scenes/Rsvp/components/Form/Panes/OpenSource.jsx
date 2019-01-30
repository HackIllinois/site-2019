// @flow
import React from 'react';

import TextField from 'components/TextField';

import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';

type Props = {
  visible: boolean,
};

const LanguageInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form">
            <TextField
              label="What is an open source project that you like?"
              name="openSource"
              placeholder="Explain or name a project (option)"
              value={data.openSource}
              onChange={registerField('openSource')}
              error={errors.openSource}
              errorMessage="Please enter a project"
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default LanguageInfo;
