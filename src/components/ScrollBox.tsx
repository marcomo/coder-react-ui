import { Box, SxProps, Theme } from '@mui/material';
import React, { CSSProperties, PropsWithChildren } from 'react';

type Props = {
  sx?: SxProps<Theme>
  flexDirection?: "column" | "row"
  fill?: boolean,
  disableScroll?: boolean
}

const ScrollBox: React.FunctionComponent<PropsWithChildren<Props>> = (props) => {
  return (
    <Box
      sx={(theme) => ({
        ...(props.fill && {
          backgroundColor: theme.vars.palette.background.paper,
          border: theme.vars.palette.border.main,
          borderRadius: theme.shape.borderRadius,
        }),
        ...{
          padding: 4,
          width: "100%",
          overflow: props.disableScroll ? "hidden" : "auto",
          boxSizing: "border-box",
        },
        display: "flex",
        flexDirection: props.flexDirection,
        // this type assertion is funky
        ...(props.sx as CSSProperties)
      })
      }
    >
      {props.children}
    </Box >
  )
}

export default ScrollBox;