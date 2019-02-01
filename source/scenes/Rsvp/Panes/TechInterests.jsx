// @flow
import React from 'react';

import Select from 'components/Select';
import FormContext from 'components/FormContext';

import { range } from './selectOptions';

import './TechInterests.scss';

const TechInterests = () => (
  <FormContext.Consumer>
    {({ data, errors, registerField }) => (
      <div className="scrolled-form">
        <h2 className="ti-inst">Order 1 (most) to 6 (least) by your interest</h2>
        <Select
          label="Data Science"
          placeholder="1-6"
          items={range}
          onSelect={registerField('dataScience', undefined, true)}
          disableInput
          index={data.dataScience}
          error={errors.dataScience}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
        <Select
          label="Web Development"
          placeholder="1-6"
          items={range}
          onSelect={registerField('webDev', undefined, true)}
          disableInput
          index={data.webDev}
          error={errors.webDev}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
        <Select
          label="Systems Programming"
          placeholder="1-6"
          items={range}
          onSelect={registerField('systems', undefined, true)}
          disableInput
          index={data.systems}
          error={errors.systems}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
        <Select
          label="App Development"
          placeholder="1-6"
          items={range}
          onSelect={registerField('appDev', undefined, true)}
          disableInput
          index={data.appDev}
          error={errors.appDev}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
        <Select
          label="Hardware"
          placeholder="1-6"
          items={range}
          onSelect={registerField('hardware', undefined, true)}
          disableInput
          index={data.hardware}
          error={errors.hardware}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
        <Select
          label="Development Tools"
          placeholder="1-6"
          items={range}
          onSelect={registerField('devTools', undefined, true)}
          disableInput
          index={data.devTools}
          error={errors.devTools}
          errorMessage="Please select a unique number for each field"
          smallLabel
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default TechInterests;
