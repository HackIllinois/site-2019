// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { isNumeric } from '../inputValidators';
import { range } from './selectOptions';

type Props = {
  visible: boolean,
};

const BeginnerInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="beginner-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Familiarity with Version Control"
              placeholder="From 1-5 (1 = low, 5 = high)"
              items={range}
              onSelect={registerField('versionControl')}
              disableInput
              index={data.versionControl}
              error={errors.versionControl}
              errorMessage="Please select your familiarity"
            />
            <Select
              label="Understanding of making pull requests"
              placeholder="From 1-5 (1 = low, 5 = high)"
              items={range}
              onSelect={registerField('pullRequest')}
              disableInput
              index={data.pullRequest}
              error={errors.pullRequest}
              errorMessage="Please select your familiarity"
            />
            <TextField
              label="Years of Programming Experience"
              name="programmingExperience"
              placeholder="Type in a number"
              value={data.yearsExperience}
              onChange={registerField('yearsExperience', isNumeric)}
              error={errors.yearsExperience}
              errorMessage="Please enter your years of programming experience"
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
