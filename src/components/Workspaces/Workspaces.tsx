import React from 'react';
import PageContentLayout from '../PageContentLayout';
import { CreateWorkspaceProvider } from "./CreateWorkspaceContext";
import CreateWorkspaceDialog from "./CreateWorkspaceDialog";
import WorkspacesHeader from "./WorkspacesHeader";
import WorkspacesEmpty from "./WorkspacesEmpty";
import { useWorkspaces } from "./WorkspacesContext";
import WorkspacesTable from "./WorkspacesTable";


const Workspaces: React.FunctionComponent = () => {
  const { workspaces } = useWorkspaces()
  return (
    <PageContentLayout>
      <CreateWorkspaceProvider>
        <CreateWorkspaceDialog />
        <WorkspacesHeader />
        {workspaces.length ? <WorkspacesTable /> : <WorkspacesEmpty />}
      </CreateWorkspaceProvider>
    </PageContentLayout>
  )
}

export default Workspaces;