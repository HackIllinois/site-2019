/* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/label-has-for: 0 */

import * as React from 'react';
import './styles.scss';

type Props = {
  label: string,
  onChange: number => void,
  error?: boolean,
  errorMessage?: string,
  initialValue?: number,
};

type State = {
  isOpen: boolean,
  inputValue: string,
  valueSelected: boolean,
  setIndex: number,
};

class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.startRef = React.createRef();
    this.endRef = React.createRef();

    this.state = {
      left: 0,
    };
  }

  onDragEnd() {
    const { onChange } = this.props;
    const { left } = this.state;
    const endVal = this.endRef.current.getBoundingClientRect().x;
    const startVal = this.startRef.current.getBoundingClientRect().x;
    const index = Math.trunc((left / (endVal - startVal)) * 10);
    onChange(index);
  }

  handleDrag(e) {
    e.preventDefault();
    const endVal = this.endRef.current.getBoundingClientRect().x;
    const startVal = this.startRef.current.getBoundingClientRect().x;

    if (startVal < e.clientX && e.clientX < endVal) {
      this.setState({ left: e.clientX - startVal });
    }
  }

  render() {
    const { label, error, errorMessage } = this.props;
    const { left } = this.state;
    return (
      <div className="slider">
        <label htmlFor={label}>
          <p>{label}</p>
        </label>
        <div id={label} className="bar-cont">
          <div className="bar" />
          <div
            className="nob"
            // style={{ marginLeft: `${index * 10}%` }}
            style={{ marginLeft: left }}
            draggable="true"
            onDrag={this.handleDrag}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
          />
          <div className="start" ref={this.startRef} />
          <div className="end" ref={this.endRef} />
        </div>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default Slider;
