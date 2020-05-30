export const validatePersonalInfo = (values) => {
  let errors = {};
  
  // First Name Errors
  if (!values.firstName) {
    errors.email = 'Email Required'
  }
}