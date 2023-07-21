import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useColorScheme } from '@mui/material';
import CreateWorkspaceTemplateSelection from './CreateWorkspaceTemplateSelection';
import ScopedColorScheme from '../ScopedColorScheme';

type Props = {
  dialogOpen: boolean
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateWorkspaceDialog: React.FunctionComponent<Props> = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>()
  const [wizardStep, setWizardStep] = useState<number>(1)

  return (
    /**
     * ScopedColorScheme is needed here as Dialog
     * is not render inside "root". Needs to be inside Dialog
     * as Dialog gets pulled out of its parent.
     */
    <Dialog open={props.dialogOpen} maxWidth="lg" fullWidth>
      <ScopedColorScheme>
        <DialogTitle>Create a Workspace</DialogTitle>
        <DialogContent>
          <CreateWorkspaceTemplateSelection
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" size="medium" onClick={() => { props.setDialogOpen(false); setSelectedTemplate(undefined) }}>
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