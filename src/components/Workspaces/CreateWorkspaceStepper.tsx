import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import EastIcon from '@mui/icons-material/East';

const steps = [
  {
    id: 'template',
    label: 'Select a Template',
  },
  {
    id: 'config',
    label: 'Configure',
  },
  {
    id: 'build',
    label: 'Create an Build',
  }
];

const CreateWorkspaceStepper: React.FunctionComponent = () => {
  const { wizardStep } = useCreateWorkspace()
  return (
    <Stepper activeStep={wizardStep} alternativeLabel>
      {steps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default CreateWorkspaceStepper;