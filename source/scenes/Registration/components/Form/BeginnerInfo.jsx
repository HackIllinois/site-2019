// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from './FormTransition';
import FormContext from '../../FormContext';

const range = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }];

type Props = {
  visible: boolean,
};

const BeginnerInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Familiarity with Version Control"
              placeholder="From 1-5 (1 = low, 5 = high)"
              items={range}
              onSelect={registerField('versionControl')}
              disableInput
              index={-1}
            />
            <Select
              label="Understanding of making pull requests"
              placeholder="From 1-5 (1 = low, 5 = high)"
              items={range}
              onSelect={registerField('prUnderstanding')}
              disableInput
              index={-1}
            />
            <TextField
              label="Years of Programming Experience"
              name="programmingExperience"
              placeholder="Type in a number"
              value={data.programmingExperience}
              onChange={registerField('programmingExperience')}
            />
            <TextField
              label="What programming languages/technical skills do you know?"
              name="otherConsiderations"
              placeholder="Type in any other considerations"
              value={data.otherConsiderations}
              onChange={registerField('otherConsiderations')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default BeginnerInfo;
