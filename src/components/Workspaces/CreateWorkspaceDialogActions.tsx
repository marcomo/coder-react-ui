import { Box, Button, DialogActions } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import React from "react";
import { useCreateWorkspace } from "./CreateWorkspaceContext";
import { useWorkspaces } from "./WorkspacesContext";

const CreateWorkspaceDialogActions: React.FunctionComponent = () => {
  const { dispatch: workspacesDispatch } = useWorkspaces()
  const { wizardStep, stepIsValid, buildDone, workspaceName, dispatch } = useCreateWorkspace()

  const confirmCallback = () => {
    switch (wizardStep) {
      case 1:
        if (workspaceName) workspacesDispatch({ type: "add", workspaceName })
        dispatch({ type: "set_workspace_creating" })
        break;

      case 2:
        dispatch({ type: "close_dialog" })
        break;

      default:
        dispatch({ type: "increment_wizard_step" })
        break;
    }
  }

  const previousStepCallback = () => {
    dispatch({ type: "decrement_wizard_step" })
  }

  const backEnabled = wizardStep === 1

  return (
    <DialogActions sx={{ justifyContent: backEnabled ? "space-between" : "flex-end" }}>
      {
        backEnabled ?
          <Button variant="outlined" onClick={previousStepCallback} startIcon={<WestIcon />}>Back</Button> : null
      }
      <Box display="flex" justifyContent="space-between" gap={1}>
        <Button variant="outlined" size="medium" disabled={wizardStep === 2 && !buildDone} onClick={(e) => dispatch({ type: "close_dialog" })}>
          {wizardStep === 2 ? "Close" : "Cancel"}
        </Button>
        {
          wizardStep < 2 ?
            <Button variant="contained" size="medium" color="primary" disabled={!stepIsValid} onClick={confirmCallback}>
              Confirm
            </Button> : null
        }
      </Box>
    </DialogActions>
  )
}

export default CreateWorkspaceDialogActions;