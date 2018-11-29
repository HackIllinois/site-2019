// @flow
import React from 'react';

import SideBar from './components/SideBar';
import ScrollableForm from './components/Form';
import './styles.scss';

const Registration = () => (
  <div className="registration">
    <SideBar />
    <ScrollableForm />
  </div>
);

export default Registration;
