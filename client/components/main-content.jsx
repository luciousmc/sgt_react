import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  paper: {
    height: 600,
    padding: 20,
    marginTop: 50
  }
});

const MainContent = () => {
  const classes = useStyles();
  
  return(
    <Container className={classes.root} maxWidth='md'>
      <Paper className={classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>
          Testing 1 2 3
        </Typography>
      </Paper>
    </Container>
  );
};

export default MainContent;