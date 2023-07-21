import React from 'react';
import Container from '@mui/material/Container';

const PageContentLayout: React.FunctionComponent = (props) => {
  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      {props.children}
    </Container>
  )
}

export default PageContentLayout;