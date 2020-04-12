import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    padding: 20
  }
}));

const getSteps = () => {
  return [
    'Personal Information',
    'Work Information',
    'Certifications'
  ];
}

const getStepContent = stepId => {
  switch(stepId) {
    case 0:
      return <h1>Personal Information</h1>
    case 1:
      return <h1>Work Information</h1>
    case 2:
      return <h1>Certifications</h1>
    default:
      return <h1>Invalid Step</h1>
  }
}

const Register = () => {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const steps = getSteps();

  return(
    <Paper className={classes.root}>
      <Typography variant='h4' align='center' gutterBottom>
        Register
      </Typography>
      
    </Paper>
  );
};

export default Register;