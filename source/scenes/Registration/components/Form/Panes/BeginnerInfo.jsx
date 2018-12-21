// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { range } from './selectOptions';

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
              onSelect={registerField('pullRequest')}
              disableInput
              index={-1}
            />
            <TextField
              label="Years of Programming Experience"
              name="programmingExperience"
              placeholder="Type in a number"
              value={data.programmingExperience}
              onChange={registerField('yearsExperience')}
            />
            <TextField
              label="What programming languages/technical skills do you know?"
              name="technicalSkills"
              placeholder="JavaScript, Python, ..."
              value={data.technicalSkills}
              onChange={registerField('technicalSkills')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default BeginnerInfo;
