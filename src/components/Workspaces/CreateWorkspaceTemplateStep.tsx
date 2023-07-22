import React from "react";
import { DialogContent } from '@mui/material';
import CreateWorkspaceTemplateSelection from "./CreateWorkspaceTemplateSelection";


const CreateWorkspaceTemplateStep: React.FunctionComponent = () => {
  return (
    <DialogContent>
      <CreateWorkspaceTemplateSelection />
    </DialogContent>
  )
}

export default CreateWorkspaceTemplateStep