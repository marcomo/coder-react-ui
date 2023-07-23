import { Box, Button, DialogActions } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import React from "react";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";

const CreateWorkspaceDialogActions: React.FunctionComponent = () => {
  const { wizardStep, stepIsValid, buildDone, dispatch } = useCreateWorkspace()

  const confirmCallback = () => {
    if (wizardStep === 2) {
      dispatch({ type: "close_dialog" })
    } else {
      dispatch({ type: "increment_wizard_step" })
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