import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fade } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import CreateWorkspaceStepper from "./CreateWorkspaceStepper";
import CreateWorkspaceTemplateStep from "./CreateWorkspaceTemplateStep";
import CreateWorkspaceConfigureStep from "./CreateWorkspaceTemplateStep";
import NoScrollBox from "../NoScrollBox";

const CreateWorkspaceDialog: React.FunctionComponent = () => {
  const { dialogOpen, selectedTemplate, wizardStep, dispatch } = useCreateWorkspace()
  const confirmCallback = () => {
    if (wizardStep === 2) {
      dispatch({ type: "close_dialog" })
    } else {
      dispatch({ type: "increment_step" })
    }
  }
  return (
    /**
     * ScopedColorScheme is needed here as Dialog
     * is not render inside "root". Needs to be inside Dialog
     * as Dialog gets pulled out of its parent.
     */

    <Dialog
      open={dialogOpen}
      TransitionProps={{
        "onExited": () => {
          if (!dialogOpen) dispatch({ type: "reset" })
        }
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
      closeAfterTransition
      maxWidth="lg"
      fullWidth>
      <ScopedColorScheme>
        <NoScrollBox sx={{ p: 0 }}>
          <DialogTitle>Create a Workspace</DialogTitle>
          <DialogContent dividers sx={{ gap: 2, display: "flex", flexDirection: "column", px: 4, pt: 2, pb: 0 }}>
            <CreateWorkspaceStepper />
            {wizardStep === 0 ? <CreateWorkspaceTemplateStep /> : null}
            {wizardStep === 1 ? <div>Wizard Step 2</div> : null}
            {wizardStep === 2 ? <div>Wizard Step 3</div> : null}
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" size="medium" onClick={() => dispatch({ type: "close_dialog" })}>
              close
            </Button>
            <Button variant="contained" size="medium" color="primary" disabled={!selectedTemplate} onClick={confirmCallback}>
              Confirm
            </Button>
          </DialogActions>
        </NoScrollBox>
      </ScopedColorScheme>
    </Dialog>
  )
}

export default CreateWorkspaceDialog;