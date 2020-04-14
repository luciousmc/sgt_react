import React from 'react';
import { Paper, Typography } from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    padding: 20
  }
}));

const Login = () => {
  const classes = useStyles();
  return(
    <Paper className={classes.root}>
      <Typography variant='h4' align='center' gutterBottom>
        Login
      </Typography>
      
    </Paper>
  );
};

export default Login; 