import React from 'react';
import { Box } from '@mui/material';
import ContentHeader from '../ContentHeader';
import PageContentLayout from '../PageContentLayout';
import ScrollBox from '../ScrollBox';
import { CreateWorkspaceProvider } from "../../context/CreateWorkspaceContext";
import CreateWorkspaceDialog from "./CreateWorkspaceDialog";
import WorkspacesHeader from "./WorkspacesHeader";
import CreateWorkspaceButton from "./CreateWorkspaceButton";


const Workspaces: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <CreateWorkspaceProvider>
        <CreateWorkspaceDialog />
        <WorkspacesHeader />
        <ScrollBox fill flexDirection="column" sx={{ alignItems: "center", gap: 4, height: "50vh", justifyContent: "space-between", maxHeight: "40rem" }}>
          <ContentHeader
            center
            primaryText='Create a Workspace'
            secondaryText='A workspace is your personal, customizable development environment in the cloud.'
          />
          <CreateWorkspaceButton />
          <Box sx={{ overflow: "hidden", maxHeight: "48rem", mb: "-4rem", flex: 1 }}>
            <img width="500" src="https://raw.githubusercontent.com/coder/coder/2901147ae326b59588c38c1fa4310d2fb738ca2a/site/static/featured/workspaces.webp" alt="Create workspace flow" />
          </Box>
        </ScrollBox>
      </CreateWorkspaceProvider>
    </PageContentLayout>
  )
}

export default Workspaces;