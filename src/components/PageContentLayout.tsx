import React from 'react';
import Container from '@mui/material/Container';
import ScopedColorScheme from './ScopedColorScheme';

const PageContentLayout: React.FunctionComponent = (props) => {
  return (
    <ScopedColorScheme>
      <Container maxWidth="lg" sx={{ p: 3 }}>
        {props.children}
      </Container>
    </ScopedColorScheme>
  )
}

export default PageContentLayout;