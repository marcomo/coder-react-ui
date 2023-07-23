import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useCreateWorkspace } from "./CreateWorkspaceContext";

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
    label: 'Build',
  }
];

const CreateWorkspaceStepper: React.FunctionComponent = () => {
  const { wizardStep, buildDone } = useCreateWorkspace()

  return (
    <Stepper activeStep={wizardStep} sx={{ px: 8 }}>
      {steps.map((step, idx) => (
        <Step key={step.id} completed={wizardStep > idx || buildDone}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default CreateWorkspaceStepper;