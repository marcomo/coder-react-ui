import React from 'react';
import { Box } from '@mui/material';
import TemplatesTable from '../TemplatesTable';
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";


const CreateWorkspaceTemplateSelection: React.FunctionComponent = () => {
  const { selectedTemplate, dispatch } = useCreateWorkspace()
  return (
    <Box>
      <TemplatesTable handleRowClick={(id) => { console.log(id); dispatch({ type: "set_template", id }) }} selectedID={selectedTemplate} />
    </Box>
  )
}

export default CreateWorkspaceTemplateSelection;