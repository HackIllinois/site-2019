// @flow
import React from 'react';

import MultiSelect from 'components/MultiSelect';
import TextField from 'components/TextField';
import FileUpload from 'components/FileUpload';
import { checkResume, checkLinkedin } from 'services/inputValidators';
import FormContext from 'components/FormContext';
import { careerInterests } from './selectOptions';

const ProfessionalInfo = () => (
  <FormContext.Consumer>
    {({ data, errors, registerField }) => (
      <div className="scrolled-form">
        <TextField
          label="LinkedIn Profile"
          name="linkedin"
          placeholder="linkedin.com/in/username/"
          value={data.linkedin}
          onChange={registerField('linkedin', checkLinkedin)}
          error={errors.linkedin}
          errorMessage="Please enter a valid linkedin url"
        />
        <FileUpload
          onChange={registerField('resume', checkResume)}
          file={data.resume}
          error={errors.resume}
          errorMessage="Resume file should be in PDF or Docx format (2MB Max Size)"
        />
        <MultiSelect
          label="Career Interests"
          placeholder="Looking for a job or internship?"
          items={careerInterests}
          onSelect={registerField('interests')}
          selected={data.interests}
        />
        <TextField
          label="Professional Skills"
          name="skills"
          placeholder="Separate your skills with commas"
          value={data.skills}
          onChange={registerField('skills')}
        />
        <TextField
          label="What programming languages/technical skills do you know?"
          name="technicalSkills"
          placeholder="JavaScript, Python, ..."
          value={data.technicalSkills}
          onChange={registerField('technicalSkills')}
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default ProfessionalInfo;
