// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FormTransition from './FormTransition';

const schools = [
  { text: 'Georgia Tech' },
  { text: 'Purdue' },
  { text: 'Purdue' },
  { text: 'Purdue' },
  { text: 'Purdue' },
  { text: 'Purdue' },
  { text: 'Purdue' },
  { text: 'University of Illinois at Urbana-Champaign' },
];

const Form = () => (
  <div className="scrolled-form">
    <Select
      label="School"
      placeholder="Select your school"
      items={schools}
      onSelect={s => console.log(s)}
      index={-1}
    />
    <TextField label="Major" name="major" placeholder="Type in your major" />
    <TextField
      label="Graduation Year"
      name="grad_year"
      placeholder="Which year are you graduating?"
    />
  </div>
);

type Props = {
  visible: boolean,
};

const StudentInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <Form />
    </FormTransition>
  );
};

export default StudentInfo;
