import React from 'react';
import { Box } from '@mui/material';
import TemplatesTable from '../TemplatesTable';

type Props = {
  selectedTemplate: string | undefined
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CreateWorkspaceTemplateSelection: React.FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <TemplatesTable handleRowClick={(id) => {console.log(id);props.setSelectedTemplate(id)}} selectedID={props.selectedTemplate} />
    </Box>
  )
}

export default CreateWorkspaceTemplateSelection;