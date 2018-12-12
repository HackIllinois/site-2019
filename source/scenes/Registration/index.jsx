// @flow
import React, { Component } from 'react';

import register from 'services/api/registration';
import SideBar from './components/SideBar';
import ScrollableForm from './components/Form';
import './styles.scss';

type Props = {};

type RegistrationData = {};

type State = {
  pane: number,
  data: RegistrationData,
};

class Registration extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      pane: 0,
      data: {},
    };

    this.setPane = this.setPane.bind(this);
    this.registerField = this.registerField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setPane: number => void;
  setPane(pane: number) {
    this.setState({
      pane,
    });
  }

  registerField: string => string => void;
  registerField(field: string) {
    return (value: string) => {
      this.setState(prevState => {
        const d = {};
        d[field] = value;
        return {
          data: Object.assign({}, prevState.data, d),
        };
      });
    };
  }

  handleSubmit() {
    const { data } = this.state;
    register(data);
  }

  render() {
    const { pane } = this.state;

    return (
      <div className="registration">
        <SideBar pane={pane} setPane={this.setPane} />
        <ScrollableForm pane={pane} setPane={this.setPane} registerField={this.registerField} />
      </div>
    );
  }
}

export default Registration;
