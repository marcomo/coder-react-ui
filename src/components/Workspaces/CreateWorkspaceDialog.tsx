import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import { CreateWorkspace } from ".";
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
          {wizardStep === 1 ? <CreateWorkspace.TemplateStep /> : null}
          {wizardStep === 2 ? <div>Wizard Step 2</div> : null}
          {wizardStep === 3 ? <div>Wizard Step 3</div> : null}
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