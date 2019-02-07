/* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/label-has-for: 0 */

import * as React from 'react';
import './styles.scss';

type Props = {
  label: string,
  value: number,
  onChange: number => void,
  error?: boolean,
  errorMessage?: string,
};

class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(Number(e.target.value));
  }

  render() {
    const { label, value, error, errorMessage } = this.props;
    return (
      <div className="slider">
        <label htmlFor={label}>
          <p>{label}</p>
        </label>
        <div className="actual-slider-cont">
          <input
            className="actual-slider"
            type="range"
            name={label}
            min={0}
            max={10}
            value={value}
            onChange={this.handleChange}
          />
          <div className="track" />
        </div>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default Slider;
