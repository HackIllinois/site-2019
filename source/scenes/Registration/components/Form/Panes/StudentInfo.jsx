// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkGraduationYear } from '../inputValidators';
import { schools } from './selectOptions';

type Props = {
  visible: boolean,
};

const StudentInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="School"
              placeholder="Select your school"
              items={schools}
              onSelect={registerField('school')}
              index={data.school}
            />
            <TextField
              label="Major"
              name="major"
              placeholder="Type in your major"
              value={data.major}
              onChange={registerField('major')}
              error={errors.major}
              errorMessage="Major is required"
            />
            <TextField
              label="Graduation Year"
              name="graduationYear"
              placeholder="Which year are you graduating?"
              value={data.graduationYear}
              onChange={registerField('graduationYear', checkGraduationYear)}
              error={errors.graduationYear}
              errorMessage="Must be a valid graduation year"
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default StudentInfo;
