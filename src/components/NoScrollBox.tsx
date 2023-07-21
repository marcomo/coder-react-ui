import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

const NoScrollBox: React.FunctionComponent<{sx?: SxProps<Theme>}> = (props) => {
  return (
    <Box sx={{
      width: "100%",
      overflow: "hidden",
      border: "var(--border-100)",
      borderRadius: "0.5rem",
      p: 4,
      ...props.sx
    }}>
      {props.children}
    </Box>
  )
}

export default NoScrollBox;