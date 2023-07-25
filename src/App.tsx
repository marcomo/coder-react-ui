import React from 'react';
import Router from './components/Router';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from "./theme";

const App: React.FunctionComponent = () => {
  /**
   * defaultMode sets the 'mui-mode' in localStorage and adds the data attr to the HTML tag.
   * But in dev, it doesn't reset the localStorage if it's changed here.
   * As a backup the data attr is also used in App.
  */
  return (
    < CssVarsProvider theme={theme} defaultMode='dark' >
      <Container disableGutters>
        <Router />
      </Container>
    </CssVarsProvider >
  );
}

export default App;

