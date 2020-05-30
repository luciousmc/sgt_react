import React from 'react';
import { PersonalInfoForm } from './forms';
import useFormValidation from './custom-hooks/useFormValidation';

const PersonalInfoContainer = () => {
  const INITIAL_STATE = {
    firstName: '',
    middleInitial: '',
    lastName: '',
    ssn: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  }

  const { handleChange, values } = useFormValidation(INITIAL_STATE);

  const { firstName, middleInitial, lastName, ssn, birthDate, phone, email, address, city, state, zipCode } = values;
  
  return(
    <PersonalInfoForm
      handleChange={handleChange}
      firstNameVal={firstName}
      middleInitialVal={middleInitial}
      lastNameVal={lastName}
      birthDateVal={birthDate}
      ssnVal={ssn}
      phoneVal={phone}
      emailVal={email}
      addressVal={address}
      cityVal={city}
      stateVal={state}
      zipCodeVal={zipCode}
    />
  );
};

export default PersonalInfoContainer;
