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
              label="Names of team members"
              name="teamMemberNames"
              placeholder="Type in names, separate with commas"
              value={data.teamMemberNames}
              onChange={registerField('teamMemberNames')}
            />
            <TextField
              label="GitHub usernames of team members"
              name="teamMemberGithubs"
              placeholder="Type in usernames, separate with commas"
              value={data.teamMemberGithubs}
              onChange={registerField('teamMemberGithubs')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default TeamInfo;
