// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkGraduationYear } from '../inputValidators';
import { schools, majors } from './selectOptions';

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
              error={errors.school}
              errorMessage="Please select your school"
            />
            <Select
              label="Field of Study"
              placeholder="Select your field of study"
              items={majors}
              onSelect={registerField('major')}
              disableInput
              index={data.major}
              error={errors.major}
              errorMessage="Please select your field of study"
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
