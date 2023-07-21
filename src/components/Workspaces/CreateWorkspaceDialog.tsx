import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useColorScheme } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import CreateWorkspaceTemplateStep from "./CreateWorkspaceTemplateStep";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";

const CreateWorkspaceDialog: React.FunctionComponent = () => {
  const { dialogOpen, setDialogOpen, selectedTemplate, setSelectedTemplate, wizardStep, setWizardStep } = useCreateWorkspace()
  return (
    /**
     * ScopedColorScheme is needed here as Dialog
     * is not render inside "root". Needs to be inside Dialog
     * as Dialog gets pulled out of its parent.
     */
    <Dialog open={dialogOpen} maxWidth="lg" fullWidth>
      <ScopedColorScheme>
        <DialogTitle>Create a Workspace</DialogTitle>
        <DialogContent>
          {
            wizardStep === 1
              ? <CreateWorkspaceTemplateStep />
              : wizardStep === 2
                ? <div>Wizard Step 2</div>
                : <div>Wizard Step 3</div>
          }
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size="medium" onClick={() => { setDialogOpen(false); setSelectedTemplate(undefined) }}>
            close
          </Button>
          <Button variant="contained" size="medium" color="primary" disabled={!selectedTemplate} onClick={() => { setWizardStep(2) }}>
            Confirm
          </Button>
        </DialogActions>
      </ScopedColorScheme>
    </Dialog>
  )
}

export default CreateWorkspaceDialog;