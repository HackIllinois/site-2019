// @flow
import React from 'react';

import './styles.scss';

type Props = {
  label: String,
  name: String,
  placeholder: String,
};

const TextField = (props: Props) => {
  const { label, name, placeholder } = props;
  return (
    <div className="form-textfield">
      <label htmlFor={name}>
        <p>{label}</p>
        <input type="text" name={name} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default TextField;
