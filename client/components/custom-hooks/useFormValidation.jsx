import React, { useState } from 'react';

const useFormValidation = initialState => {
  const [ values, setValues ] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value
    });
  }

  return { handleChange, values };
}

export default useFormValidation;