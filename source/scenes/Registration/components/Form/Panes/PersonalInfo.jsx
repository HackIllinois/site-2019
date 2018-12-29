// @flow
import React from 'react';

import MultiSelect from 'components/MultiSelect';
import Select from 'components/Select';
import TextField from 'components/TextField';

import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';
import { checkAge } from '../inputValidators';
import { shirtSizes, transportation, diet, genderOptions } from './selectOptions';

type Props = {
  visible: boolean,
};

const PersonalInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="personal-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Shirt Size"
              placeholder="Select a size"
              items={shirtSizes}
              onSelect={registerField('shirtSize')}
              disableInput
              index={data.shirtSize}
              error={errors.shirtSize}
              errorMessage="Please select your shirt size"
            />
            <Select
              label="Transportation"
              placeholder="Select a way to get here"
              items={transportation}
              onSelect={registerField('transportation')}
              disableInput
              index={data.transportation}
              error={errors.transportation}
              errorMessage="Please select if you need travel assistance"
            />
            <MultiSelect
              label="Diet"
              placeholder="Any dietary restrictions we should know about?"
              items={diet}
              onSelect={registerField('diet')}
              error={errors.diet}
              errorMessage="Please specify any dietary restrictions"
            />
            <TextField
              label="Phone"
              name="phone"
              placeholder="123 456 7890"
              value={data.phone}
              onChange={registerField('phone')}
              error={errors.phone}
              errorMessage="Please enter your phone number"
            />
            <div className="split">
              <TextField
                label="Age"
                name="age"
                placeholder="How old are you?"
                value={data.age}
                onChange={registerField('age', checkAge)}
                error={errors.age}
                errorMessage="Please enter a valid age"
              />
              <Select
                label="Gender"
                placeholder="Your gender?"
                items={genderOptions}
                onSelect={registerField('gender')}
                disableInput
                index={data.gender}
                error={errors.gender}
                errorMessage="Please select your gender"
              />
            </div>
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default PersonalInfo;
