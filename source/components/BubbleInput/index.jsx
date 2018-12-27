// @flow
import React, { Component } from 'react';

import './styles.scss';

type BubbleProps = {
  text: string,
  onDestroy: () => void,
};

class Bubble extends Component<BubbleProps> {}

type Props = {
  label: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: string => void,
};

type State = {
  input: string,
};

class BubbleInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress: (SyntheticEvent<HTMLInputElement>) => void;
  handleKeyPress(e: SyntheticEvent<HTMLInputElement>) {
    const { onChange } = this.props;
    onChange(e.currentTarget.value);
  }

  render() {
    const { label, name, placeholder, value } = this.props;
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
      </div>
    );
  }
}

export default BubbleInput;
