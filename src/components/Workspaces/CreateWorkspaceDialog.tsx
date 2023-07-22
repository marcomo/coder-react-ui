import React, { useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ScopedColorScheme from '../ScopedColorScheme';
import { CreateWorkspace as CW } from ".";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";

const CreateWorkspaceDialog: React.FunctionComponent = () => {
  const { dialogOpen, setDialogOpen, selectedTemplate, setSelectedTemplate, wizardStep, setWizardStep } = useCreateWorkspace()
  const confirmCallback = () => {
    if (wizardStep === 2) {
      setSelectedTemplate(undefined);
      setWizardStep(0);
      setDialogOpen(false);
    } else {
      setWizardStep(wizardStep + 1);
    }
  }
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
          <CW.Stepper />
          {wizardStep === 0 ? <CW.TemplateStep /> : null}
          {wizardStep === 1 ? <div>Wizard Step 2</div> : null}
          {wizardStep === 2 ? <div>Wizard Step 3</div> : null}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size="medium" onClick={() => {
            setDialogOpen(false);
            setSelectedTemplate(undefined);
            setWizardStep(0);
          }}>
            close
          </Button>
          <Button variant="contained" size="medium" color="primary" disabled={!selectedTemplate} onClick={confirmCallback}>
            Confirm
          </Button>
        </DialogActions>
      </ScopedColorScheme>
    </Dialog>
  )
}

export default CreateWorkspaceDialog;