// @flow
import React, { Component } from 'react';

import register from 'services/api/registration';
import FormContext from './FormContext';
import SideBar from './components/SideBar';
import ScrollableForm from './components/Form';
import required from './components/Form/required';
import './styles.scss';

import type { RegistrationData } from './FormContext';

type Props = {};

type State = {
  pane: number,
  data: RegistrationData,
  errors: { [string]: boolean },
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
        phone: '',
        age: '',
        gender: -1,
        isBeginner: -1,
        linkedin: '',
        interests: '',
        skills: '',
        priorAttendance: -1,
        extraInfo: '',
        teamMembers: '',
        versionControl: -1,
        pullRequest: -1,
        yearsExperience: '',
        technicalSkills: '',
      },
      errors: {},
    };

    this.setPane = this.setPane.bind(this);
    this.registerField = this.registerField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setPane: number => void;
  setPane(newPane: number) {
    this.setState(prevState => {
      const { data, pane, errors } = prevState;
      const missing = required(pane, data);
      if (missing.length === 0 || newPane < pane) {
        return { pane: newPane };
      }

      const e = {};
      missing.forEach(field => {
        e[field] = true;
      });
      return { errors: Object.assign({}, errors, e) };
    });
  }

  registerField: (string, ?(string) => boolean) => string => void;
  registerField(field: string, validator?: string => boolean) {
    return (value: string) => {
      const { data } = this.state;
      if (!(field in data)) {
        throw new Error(`${field} missing from Form state`);
      }
      this.setState(prevState => {
        const d = {};
        d[field] = value;
        const e = {};
        if (validator === undefined) {
          e[field] = false;
        } else {
          e[field] = !validator(value);
        }
        return {
          data: Object.assign({}, prevState.data, d),
          errors: Object.assign({}, prevState.errors, e),
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
    const { pane, data, errors } = this.state;

    return (
      <div className="registration">
        <SideBar pane={pane} setPane={this.setPane} />
        <FormContext.Provider value={{ data, errors, registerField: this.registerField }}>
          <ScrollableForm pane={pane} setPane={this.setPane} />
        </FormContext.Provider>
      </div>
    );
  }
}

export default Registration;
