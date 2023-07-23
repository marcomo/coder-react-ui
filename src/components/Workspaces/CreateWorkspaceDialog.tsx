import React from 'react';
import { Dialog, DialogContent, DialogTitle, Fade } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import CreateWorkspaceStepper from "./CreateWorkspaceStepper";
import CreateWorkspaceTemplateStep from "./CreateWorkspaceTemplateStep";
import CreateWorkspaceConfigureStep from "./CreateWorkspaceConfigureStep";
import ScrollBox from "../ScrollBox";
import CreateWorkspaceBuildStep from "./CreateWorkspaceBuildStep";
import CreateWorkspaceDialogActions from "./CreateWorkspaceDialogActions";

const CreateWorkspaceDialog: React.FunctionComponent = () => {
  const { dialogOpen, wizardStep, dispatch } = useCreateWorkspace()

  return (
    <Dialog
      open={dialogOpen}
      TransitionProps={{
        onExited: () => {
          if (!dialogOpen) dispatch({ type: "reset" })
        }
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
      closeAfterTransition
      disableEscapeKeyDown
      maxWidth="lg"
      fullWidth>
      <ScopedColorScheme>
        <ScrollBox flexDirection="column" disableScroll sx={{ p: 0, height: "75vh" }}>
          <DialogTitle>Create a Workspace</DialogTitle>
          <DialogContent dividers sx={{ gap: 2, display: "flex", flexDirection: "column", px: 4, pt: 2, pb: 0 }}>
            <CreateWorkspaceStepper />
            {wizardStep === 0 ? <CreateWorkspaceTemplateStep /> : null}
            {wizardStep === 1 ? <CreateWorkspaceConfigureStep /> : null}
            {wizardStep === 2 ? <CreateWorkspaceBuildStep /> : null}
          </DialogContent>
          <CreateWorkspaceDialogActions />
        </ScrollBox>
      </ScopedColorScheme>
    </Dialog>
  )
}

export default CreateWorkspaceDialog;