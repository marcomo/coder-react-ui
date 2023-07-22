import { ScopedCssBaseline, useColorScheme } from '@mui/material';
import React from 'react';

const ScopedColorScheme: React.FunctionComponent = (props) => {
  const { mode } = useColorScheme()
  return (
    /**
     * Primarly used to style native browser components (eg. scrollbar)
     * via enableColorScheme prop.
     */
    <ScopedCssBaseline data-mui-color-scheme={mode} enableColorScheme sx={{ flex: 1 }}>
      {props.children}
    </ScopedCssBaseline>
  )
}

export default ScopedColorScheme