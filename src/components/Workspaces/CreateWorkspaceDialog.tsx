import React, { useEffect } from 'react';
import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, Fade } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import { useCreateWorkspace } from "./CreateWorkspaceContext";
import CreateWorkspaceStepper from "./CreateWorkspaceStepper";
import CreateWorkspaceTemplateStep from "./CreateWorkspaceTemplateStep";
import CreateWorkspaceConfigureStep from "./CreateWorkspaceConfigureStep";
import ScrollBox from "../ScrollBox";
import CreateWorkspaceBuildStep from "./CreateWorkspaceBuildStep";
import CreateWorkspaceDialogActions from "./CreateWorkspaceDialogActions";

const CreateWorkspaceDialog: React.FunctionComponent = () => {
  const { dialogOpen, wizardStep, workspaceName, workspaceCreating, dispatch } = useCreateWorkspace()

  /**
   * In step 2 (configure), the workspace is created in the Workspaces state.
   * We flag the creating state in CreateWorkspace state and clear it hear.
   * This controls the spinner rendering before the build step and removes.
   */
  useEffect(() => {
    if (workspaceCreating) {
      if (workspaceName && wizardStep === 1) {
        setTimeout(() => {
          dispatch(({ type: "clear_workspace_creating" }))
        }, 2000)
      }
    }
  }, [wizardStep, workspaceName, workspaceCreating, dispatch])

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
            {wizardStep === 1
              ? workspaceCreating ? (
                <Box display="flex" flex={1} justifyContent="center" alignItems="center"><CircularProgress /></Box>
              ) : <CreateWorkspaceConfigureStep />
              : null}
            {wizardStep === 2 ? <CreateWorkspaceBuildStep /> : null}
          </DialogContent>
          <CreateWorkspaceDialogActions />
        </ScrollBox>
      </ScopedColorScheme>
    </Dialog>
  )
}

export default CreateWorkspaceDialog;