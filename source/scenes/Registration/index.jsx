// @flow
import React, { Component } from 'react';

import register from 'services/api/registration';
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
        school: -1,
        major: '',
        graduationYear: '',
        shirtSize: -1,
        transportation: -1,
        diet: -1,
        phoneNumber: '',
        age: '',
        gender: -1,
        isNovice: -1,
        linkedin: '',
        professionalInterest: '',
        // Skills
      },
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

  handleSubmit: void => void;
  handleSubmit() {
    const { data } = this.state;
    register(data);
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
