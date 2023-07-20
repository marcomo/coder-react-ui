import React from 'react';
import Router from './components/Router';
import './App.scss';
import { Container } from '@mui/material';

const App: React.FunctionComponent = () => {
  return (
    <Container disableGutters className="App">
      <Router />
    </Container>
  );
}

export default App;

