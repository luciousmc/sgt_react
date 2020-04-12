import React, { useState } from 'react';
import Landing from './landing';
import { Container } from '@material-ui/core';
import Header from './header';
import Register from './register';
import Login from './login';


const App = () => {
  const [ view, setView ] = useState('landing');

  return(
    <React.Fragment>
      <Header />
      <Container maxWidth='md' >
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