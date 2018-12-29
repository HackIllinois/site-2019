import { createContext } from 'react';

export type RegistrationData = {
  major: string,
  graduationYear: string,
  phoneNumber: string,
};

const FormContext = createContext();

export default FormContext;
