import React, { useState } from 'react';
import PersonalInfoForm from './personal-info-form';

const PersonalInfoContainer = () => {
  const [ personalInfo, setPersonalInfo ] = useState({
    firstName: '',
    lastName: '',
    ssn: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: 0
  });

  const handleChange = ({ target: { name, value } }) => {
    setPersonalInfo(prevState => {
      prevState[name] = value;
      return prevState;
    });
  };

  return(
    <PersonalInfoForm
      changeFunc={handleChange}
    />
  );
};

export default PersonalInfoContainer;
