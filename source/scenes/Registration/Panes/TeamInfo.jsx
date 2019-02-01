// @flow
import React from 'react';

import TextField from 'components/TextField';
import FormContext from 'components/FormContext';

const TeamInfo = () => (
  <FormContext.Consumer>
    {({ data, registerField }) => (
      <div className="scrolled-form">
        <TextField
          label="GitHub usernames of team members (Optional)"
          name="teamMembers"
          placeholder="Type in usernames, separate with commas"
          value={data.teamMembers}
          onChange={registerField('teamMembers')}
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default TeamInfo;
