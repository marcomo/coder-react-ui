import { Button } from "@mui/material";
import React from "react";
import { useCreateWorkspace } from "./CreateWorkspaceContext";
import EastIcon from '@mui/icons-material/East';

const CreateWorkspaceButton: React.FunctionComponent = () => {
  const { dispatch } = useCreateWorkspace()
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={() => dispatch({ type: "open_dialog" })}
      startIcon={< EastIcon />}>
      Select a Template
    </Button >
  )
}

export default CreateWorkspaceButton;