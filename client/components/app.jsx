import React, { useState } from 'react';
import Landing from './landing';
import { Container } from '@material-ui/core';
import Header from './header';
import Register from './register';
import Login from './login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '80%'
  }
});

const App = () => {
  const [ view, setView ] = useState('landing');

  const classes = useStyles();
  
  return(
    <React.Fragment>
      <Header setView={setView} />
      <Container className={classes.root} maxWidth='md'>
        {
          view === 'landing'
            ? <Landing setView={setView} />
            : view === 'login'
              ? <Login />
              : view === 'register'
                ? <Register />
                : null
        }
      </Container>
    </React.Fragment>
  )
};

export default App;