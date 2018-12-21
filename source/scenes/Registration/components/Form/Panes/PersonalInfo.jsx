// @flow
import React from 'react';

import Select from 'components/Select';
import TextField from 'components/TextField';

import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';

import { shirtSizes, transportation, diet, genderOptions } from './selectOptions';

type Props = {
  visible: boolean,
};

const PersonalInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="personal-info">
      <FormContext.Consumer>
        {({ data, registerField }) => (
          <div className="scrolled-form">
            <Select
              label="Shirt Size"
              placeholder="Select a size"
              items={shirtSizes}
              onSelect={registerField('shirtSize')}
              disableInput
              index={data.shirtSize}
            />
            <Select
              label="Transportation"
              placeholder="Select a way to get here"
              items={transportation}
              onSelect={registerField('transportation')}
              disableInput
              index={data.transportation}
            />
            <Select
              label="Diet"
              placeholder="Any dietary restrictions we should know about?"
              items={diet}
              onSelect={registerField('diet')}
              disableInput
              index={data.diet}
            />
            <TextField
              label="Phone"
              name="phone"
              placeholder="123 456 7890"
              value={data.phone}
              onChange={registerField('phone')}
            />
            <div className="split">
              <TextField
                label="Age"
                name="age"
                placeholder="How old are you?"
                value={data.age}
                onChange={registerField('age')}
              />
              <Select
                label="Gender"
                placeholder="Your gender?"
                items={genderOptions}
                onSelect={registerField('gender')}
                disableInput
                index={data.gender}
              />
            </div>
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default PersonalInfo;
