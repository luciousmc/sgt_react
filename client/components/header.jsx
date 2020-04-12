import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Header = () => {
  const classes = useStyles();

  return(
    <AppBar className={classes.root} position='static'>
      <Typography variant="h4" component="h1">
        Coast Health Community College CEU Registration
      </Typography>
    </AppBar>
  );
};

export default Header;