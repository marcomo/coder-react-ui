import { Button } from "@mui/material";
import React from "react";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import EastIcon from '@mui/icons-material/East';

const CreateWorkspaceButton: React.FunctionComponent = () => {
  const { setDialogOpen } = useCreateWorkspace()
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={() => {
        setDialogOpen(true)
      }}
      startIcon={<EastIcon />}>
      Select a Template
    </Button>
  )
}

export default CreateWorkspaceButton;