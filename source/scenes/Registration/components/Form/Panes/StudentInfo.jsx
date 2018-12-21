// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkGraduationYear } from '../inputValidators';

const schools = [
  { text: 'Georgia Tech' },
  { text: 'Michigan State University' },
  { text: 'Northwestern' },
  { text: 'Other' },
  { text: 'Purdue' },
  { text: 'University of Chicago' },
  { text: 'University of Florida' },
  { text: 'University of Michigan' },
  { text: 'University of Illinois at Chicago' },
  { text: 'University of Illinois at Urbana-Champaign' },
  { text: 'University of Wisconsin-Madison' },
];

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
