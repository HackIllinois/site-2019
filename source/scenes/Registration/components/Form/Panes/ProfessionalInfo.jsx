// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';
import FileUpload from 'components/FileUpload';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkResumeExt } from '../inputValidators';

type Props = {
  visible: boolean,
};

const yn = [{ text: 'Yes' }, { text: 'No' }];

const ProfessionalInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="professional-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Are you a beginner?"
              placeholder="Are you though?"
              items={yn}
              onSelect={registerField('isBeginner')}
              disableInput
              index={data.isBeginner}
            />
            <TextField
              label="LinkedIn Profile"
              name="linkedin"
              placeholder="Paste your profile url here"
              value={data.linkedin}
              onChange={registerField('linkedin')}
            />
            <FileUpload
              onChange={registerField('resume', checkResumeExt)}
              file={data.resume}
              error={errors.resume}
              errorMessage="Resume file should be in PDF or Docx format"
            />
            <TextField
              label="Career Interests"
              name="interests"
              placeholder="What do you want to be after you graduate?"
              value={data.interests}
              onChange={registerField('interests')}
            />
            <TextField
              label="Skills"
              name="skills"
              placeholder="Separate your skills with commas"
              value={data.skills}
              onChange={registerField('skills')}
            />
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default ProfessionalInfo;
