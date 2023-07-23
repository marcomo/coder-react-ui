import React, { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import ScopedColorScheme from './ScopedColorScheme';

const PageContentLayout: React.FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <ScopedColorScheme>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {props.children}
      </Container>
    </ScopedColorScheme>
  )
}

export default PageContentLayout;