import { ScopedCssBaseline, useColorScheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const ScopedColorScheme: React.FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const { mode } = useColorScheme()
  return (
    /**
     * Primarly used to style native browser components (eg. scrollbar)
     * via enableColorScheme prop.
     */
    <ScopedCssBaseline data-mui-color-scheme={mode} enableColorScheme>
      {props.children}
    </ScopedCssBaseline>
  )
}

export default ScopedColorScheme