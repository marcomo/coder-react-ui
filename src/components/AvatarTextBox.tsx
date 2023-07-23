import React from "react";
import { Check } from "@mui/icons-material";
import { Avatar, Box, SxProps, Theme } from "@mui/material";

type Props = {
  text?: string
  sx?: SxProps<Theme>
  checkable?: boolean
  isChecked?: boolean
  fill?: boolean
}

const AvatarTextBox: React.FunctionComponent<Props> = (props) => {
  return (
    <Box display="flex" alignItems="center" gap="1rem" sx={(theme) => ({
      ...(props.fill && {
        backgroundColor: theme.vars.palette.background.paper,
        border: theme.vars.palette.border.main,
        borderRadius: theme.shape.borderRadius,
        p: 1
      })
    })}>
      <Avatar
        sx={props.sx}
      >
        {props.checkable && props.isChecked ? <Check /> : props.text?.[0].toUpperCase()}
      </Avatar>
      {props.text}
    </Box>
  )
}

export default AvatarTextBox;