import React, { useState } from 'react';
import { PersonalInfoForm } from './forms';

const PersonalInfoContainer = () => {
  const [ personalInfo, setPersonalInfo ] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    ssn: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleChange = ({ target: { name, value } }) => {    
    setPersonalInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const { firstName, middleInitial, lastName, ssn, phone, email, address, city, state, zipCode } = personalInfo;

  return(
    <PersonalInfoForm
      changeFunc={handleChange}
      firstNameVal={firstName}
      middleInitialVal={middleInitial}
      lastNameVal={lastName}
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
