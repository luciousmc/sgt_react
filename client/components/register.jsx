import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RegistrationStepper from './registration-stepper';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    padding: 20
  }
}));

const Register = () => {
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      <Typography variant='h4' align='center' gutterBottom>
        Register
      </Typography>
      <RegistrationStepper />
    </Paper>
  );
};

export default Register;