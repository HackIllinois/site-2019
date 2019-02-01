// @flow
import React from 'react';

import TextField from 'components/TextField';
import Select from 'components/Select';
import MultiSelect from 'components/MultiSelect';
import { checkPhoneNumber } from 'services/inputValidators';

import FormContext from '../FormContext';
import { yn, diet, transportation } from './selectOptions';

const GeneralInfo = () => (
  <FormContext.Consumer>
    {({ data, errors, registerField }) => (
      <div className="scrolled-form">
        <Select
          label="Can you attend?"
          placeholder="Yes or No"
          items={yn}
          onSelect={registerField('isAttending')}
          disableInput
          index={data.isAttending}
          error={errors.isAttending}
          errorMessage="Please select whether you can come"
        />
        <TextField
          label="Phone"
          name="phone"
          placeholder="123 456 7890"
          value={data.phone}
          onChange={registerField('phone', checkPhoneNumber)}
          phone
          error={errors.phone}
          errorMessage="Please enter a valid 10-digit phone number"
        />
        <MultiSelect
          label="Dietary Restrictions"
          placeholder="Any dietary restrictions we should know about?"
          items={diet}
          onSelect={registerField('diet')}
          selected={data.diet}
          error={errors.diet}
          errorMessage="Please specify any dietary restrictions"
        />
        <Select
          label="Travel"
          placeholder="How will you get here?"
          items={transportation}
          onSelect={registerField('transportation')}
          disableInput
          index={data.transportation}
          error={errors.transportation}
          errorMessage="Please select if you need travel assistance"
        />
        <Select
          label="Would you give a ~5 minute lightning talk?"
          placeholder="Yes or No"
          items={yn}
          onSelect={registerField('lightningInterest')}
          disableInput
          index={data.lightningInterest}
          error={errors.lightningInterest}
          errorMessage="Please select whether you can come"
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default GeneralInfo;
