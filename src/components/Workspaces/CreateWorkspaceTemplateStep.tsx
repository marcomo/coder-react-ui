import React from "react";
import TemplatesTable from '../Templates/TemplatesTable';
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";

const CreateWorkspaceTemplateStep: React.FunctionComponent = () => {
  const { selectedTemplate, dispatch } = useCreateWorkspace()
  return (
    <TemplatesTable
      handleRowClick={(id) => dispatch({ type: "set_template", id })}
      selectedID={selectedTemplate}
      sx={{ borderBottom: "none", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
  )
}

export default CreateWorkspaceTemplateStep