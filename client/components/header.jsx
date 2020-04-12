import React from 'react';
import { Typography, AppBar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Header = ({ setView }) => {
  const classes = useStyles();

  return(
    <AppBar className={classes.root} position='static'>
      <Typography variant="h4" component="h1">
        <Link color='initial' onClick={() => setView('landing')}>
          Coast Health Community College CEU Registration
        </Link>
      </Typography>
    </AppBar>
  );
};

Header.propTypes = {
  setView: PropTypes.func.isRequired
}

export default Header;