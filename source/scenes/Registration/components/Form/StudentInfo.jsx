// @flow
import React from 'react';
import Transition from 'react-transition-group/Transition';

import Select from 'components/Select';
import TextField from 'components/TextField';

type Props = {
  visible: boolean,
};

const defaultStyle = {
  transition: 'opacity 300ms ease-in-out',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const StudentInfo = (props: Props) => {
  const { visible } = props;
  return (
    <Transition in={visible} timeout={300}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Form />
        </div>
      )}
      <Form />
    </Transition>
  );
};

const schools = [
  { text: 'Georgia Tech' },
  { text: 'Purdue' },
  { text: 'University of Illinois at Urbana-Champaign' },
];

const Form = () => (
  <div className="scrolled-form">
    <Select
      label="School"
      tip="Select your school"
      items={schools}
      onSelect={s => console.log(s)}
    />
    <TextField label="Major" name="major" placeholder="Type in your major" />
    <TextField
      label="Graduation Year"
      name="grad_year"
      placeholder="Which year are you graduating?"
    />
  </div>
);

export default StudentInfo;
