// @flow
/* eslint react/require-default-props: 0 */

import React, { Component } from 'react';

import './styles.scss';

type Props = {
  label: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: string => void,
  error?: boolean,
  errorMessage?: string,
};

class TextField extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress: (SyntheticEvent<HTMLInputElement>) => void;
  handleKeyPress(e: SyntheticEvent<HTMLInputElement>) {
    const { onChange } = this.props;
    onChange(e.currentTarget.value);
  }

  render() {
    const { label, name, placeholder, value, error, errorMessage } = this.props;
    return (
      <div className="form-field">
        <label htmlFor={name}>
          <p>{label}</p>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this.handleKeyPress}
          />
        </label>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default TextField;
