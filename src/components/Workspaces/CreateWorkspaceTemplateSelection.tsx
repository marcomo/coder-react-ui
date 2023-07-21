import React from 'react';
import { Box } from '@mui/material';
import TemplatesTable from '../TemplatesTable';
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";


const CreateWorkspaceTemplateSelection: React.FunctionComponent = () => {
  const { selectedTemplate, setSelectedTemplate } = useCreateWorkspace()
  return (
    <Box>
      <TemplatesTable handleRowClick={(id) => { console.log(id); setSelectedTemplate(id) }} selectedID={selectedTemplate} />
    </Box>
  )
}

export default CreateWorkspaceTemplateSelection;