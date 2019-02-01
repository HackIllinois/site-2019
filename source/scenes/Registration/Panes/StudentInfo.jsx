// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import { checkGraduationYear } from 'services/inputValidators';
import FormContext from '../FormContext';
import { schools, majors } from './selectOptions';

const StudentInfo = () => (
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
);

export default StudentInfo;
