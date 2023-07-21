import React from "react";
import { DialogContent } from '@mui/material';
import { CreateWorkspace } from '.';

const CreateWorkspaceTemplateStep: React.FunctionComponent = () => {
  return (
    <DialogContent>
      <CreateWorkspace.TemplateSelection />
    </DialogContent>
  )
}

export default CreateWorkspaceTemplateStep