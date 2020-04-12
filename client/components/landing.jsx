import React from 'react';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: 20,
    marginTop: 50
  },
  sectionTitle: {
    marginTop: 20,
    padding: 15
  },
  button: {
    padding: 30,
    fontSize: '1.6rem',
    margin: 10
  }
});

const Landing = ({ setView }) => {
  const classes = useStyles();
  
  return(
    <Paper className={classes.root}>
      <Typography variant='h4' align='center' gutterBottom>
        Welcome! Choose an option below
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Button className={classes.button} variant='contained' color='primary' onClick={()=> setView('register')}>
            First-Time Student
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button className={classes.button} variant='contained' color='secondary' onClick={()=> setView('login')}>
            Returning Student
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

Landing.propTypes = {
  setView: PropTypes.func.required
}

export default Landing;