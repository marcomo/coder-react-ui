import React from "react";
import { Box, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { useCreateWorkspace } from "./CreateWorkspaceContext";

const CreateWorkspaceBuildActions: React.FunctionComponent = () => {
  const { workspaceName, dispatch } = useCreateWorkspace()

  return (
    <Box display="flex" justifyContent="center" gap={2}>
      <Button variant="outlined" size="medium" onClick={() => dispatch({ type: "close_dialog" })} sx={{ flex: 1, maxWidth: "15rem" }}>
        Close
      </Button>
      <Button href={`/workspaces/@username/${workspaceName}`} variant="contained" size="medium" color="primary" startIcon={<EastIcon />} onClick={() => { }} sx={{ flex: 1, maxWidth: "15rem" }}>
        Go to Workspace
      </Button>
    </Box>
  )
}

export default CreateWorkspaceBuildActions;