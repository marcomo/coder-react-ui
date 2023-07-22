import React from 'react';
import Router from './components/Router';
// import './App.scss';
import { Container } from '@mui/material';

const App: React.FunctionComponent = () => {
  return (
    /**
     * In dev, data-mui-color-scheme="dark" is set here as a backup
     * to defaultMode in App. This should NOT be used in production as the
     * user would not be able to get out of dark mode. It is only including
     * here should any dev running this code might have mode set in
     * localStorage resulting in unwanted (incomplete) light-mode theme.
     */
    <Container disableGutters data-mui-color-scheme="dark">
      <Router />
    </Container>
  );
}

export default App;

