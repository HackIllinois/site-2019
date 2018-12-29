// @flow
import React from 'react';

import MultiSelect from 'components/MultiSelect';
import Select from 'components/Select';
import TextField from 'components/TextField';
import FileUpload from 'components/FileUpload';
import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkResumeExt } from '../inputValidators';
import { yn, careerInterests } from './selectOptions';

type Props = {
  visible: boolean,
};

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
              error={errors.isBeginner}
              errorMessage="Please select an option"
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
            <MultiSelect
              label="Career Interests"
              placeholder="Looking for a job or internship?"
              items={careerInterests}
              onSelect={registerField('interests')}
            />
            <TextField
              label="Professional Skills"
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
