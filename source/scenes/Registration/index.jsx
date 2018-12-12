// @flow
import React, { Component } from 'react';

import FormContext from './FormContext';
import SideBar from './components/SideBar';
import ScrollableForm from './components/Form';
import './styles.scss';

import type { RegistrationData } from './FormContext';

type Props = {};

type State = {
  pane: number,
  data: RegistrationData,
};

class Registration extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      pane: 0,
      data: {
        major: '',
        graduationYear: '',
        phoneNumber: '',
      },
    };

    this.setPane = this.setPane.bind(this);
    this.registerField = this.registerField.bind(this);
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
      const { data } = this.state;
      if (!(field in data)) {
        throw new Error(`${field} missing from Form state`);
      }
      this.setState(prevState => {
        const d = {};
        d[field] = value;
        return {
          data: Object.assign({}, prevState.data, d),
        };
      });
    };
  }

  render() {
    const { pane, data } = this.state;

    return (
      <div className="registration">
        <SideBar pane={pane} setPane={this.setPane} />
        <FormContext.Provider value={{ data, registerField: this.registerField }}>
          <ScrollableForm pane={pane} setPane={this.setPane} registerField={this.registerField} />
        </FormContext.Provider>
      </div>
    );
  }
}

export default Registration;
