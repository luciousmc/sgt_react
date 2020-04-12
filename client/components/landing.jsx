import React from 'react';
import { Container, Paper, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '80%'
  },
  paper: {
    height: 600,
    padding: 20,
    marginTop: 50
  },
  sectionTitle: {
    marginTop: 20,
    padding: 15
  }
});

const Landing = ({ setView }) => {
  const classes = useStyles();
  
  return(
    <Container className={classes.root} maxWidth='md'>
      <Paper className={classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>
          Welcome! Choose an option below
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.sectionTitle} variant='h6' align='center'>
              <Link variant='body2' component='button' onClick={()=> setView('register')}>
                First-Time Student
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.sectionTitle} variant='h6' align='center'>
            <Link variant='body2' component='button' onClick={()=> setView('login')}>
              Returning Student
            </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Landing;