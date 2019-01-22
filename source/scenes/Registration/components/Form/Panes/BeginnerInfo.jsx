// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { isNumeric } from '../inputValidators';
import { yn, range } from './selectOptions';

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
              label="Are you a beginner?"
              placeholder="Yes or No"
              items={yn}
              onSelect={registerField('isBeginner')}
              disableInput
              index={data.isBeginner}
              error={errors.isBeginner}
              errorMessage="Please select an option"
            />
            <Select
              label="Have you ever contributed to open source before?"
              placeholder="Yes or No"
              items={yn}
              onSelect={registerField('isOSContributor')}
              disableInput
              index={data.isOSContributor}
              error={errors.isOSContributor}
              errorMessage="Please select an option"
            />
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
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default BeginnerInfo;
