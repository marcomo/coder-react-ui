import React, { useState } from 'react';
import { Box } from '@mui/material';
import ContentHeader from '../ContentHeader';
import PageContentLayout from '../PageContentLayout';
import { CreateWorkspace as CW, Workspaces as WS } from '.';
import NoScrollBox from '../NoScrollBox';
import { CreateWorkspaceProvider, Context } from "../../context/CreateWorkspaceContext";

const Workspaces: React.FunctionComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>();
  const [wizardStep, setWizardStep] = useState<Context["wizardStep"]>(0);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <PageContentLayout>
      <CreateWorkspaceProvider value={{ selectedTemplate, setSelectedTemplate, dialogOpen, setDialogOpen, wizardStep, setWizardStep }}>
        <CW.Dialog />
        <WS.Header />
        <NoScrollBox sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <ContentHeader
            center
            primaryText='Create a Workspace'
            secondaryText='A workspace is your personal, customizable development environment in the cloud.'
          />
          <CW.Button />
          <Box sx={{ mb: -12 }}>
            <img width="500" src="https://raw.githubusercontent.com/coder/coder/2901147ae326b59588c38c1fa4310d2fb738ca2a/site/static/featured/workspaces.webp" alt="Create workspace flow" />
          </Box>
        </NoScrollBox>
      </CreateWorkspaceProvider>
    </PageContentLayout>
  )
}

export default Workspaces;