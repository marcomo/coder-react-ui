import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  primaryText: string
  secondaryText?: string | React.ComponentType
  center?: boolean
}

const ContentHeader: React.FunctionComponent<Props> = (props) => {
  const Secondary = props.secondaryText;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: props.center ? "center" : "flex-start" }}>
      <Typography variant='h1' align={props.center ? "center" : "left"}>{props.primaryText}</Typography>
      {
        Secondary ? <Typography variant='h2' align={props.center ? "center" : "left"}>{
          typeof props.secondaryText === "string" ? Secondary : <Secondary />
        }</Typography> : null
      }
    </Box>
  )
}

export default ContentHeader;