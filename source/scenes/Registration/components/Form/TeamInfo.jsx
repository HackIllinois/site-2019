// @flow
import React from 'react';

import TextField from 'components/TextField';
import FormTransition from './FormTransition';
import FormContext from '../../FormContext';

type Props = {
  visible: boolean,
};

const TeamInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, registerField }) => (
          <div className="scrolled-form">
            <TextField
              label="GitHub usernames of team members"
              name="teamMembers"
              placeholder="Type in usernames, separate with commas"
              value={data.teamMembers}
              onChange={registerField('teamMembers')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default TeamInfo;
