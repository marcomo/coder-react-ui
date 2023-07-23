import React, { PropsWithChildren } from "react";
import { useCreateWorkspace } from "./CreateWorkspaceContext";
import ContentHeader from "../ContentHeader";
import ScrollBox from "../ScrollBox";
import { templates } from "../Templates/TemplatesContext";
import { Box, TextField } from "@mui/material";
import AvatarTextBox from "../AvatarTextBox";

// TODO: Move to seperate file
const Section: React.FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <Box component="section" display={"flex"} flexDirection={"column"} gap={1} pb={4}>
      {props.children}
    </Box>
  )
}

const CreateWorkspaceConfigureStep: React.FunctionComponent = () => {
  const { selectedTemplate, workspaceNameError, dispatch } = useCreateWorkspace()

  return (
    <ScrollBox sx={{ p: 4, bgcolor: "var(--color-paper-100)", gap: 2, height: "40vh" }}>
      <Box component="form" gap={8} display={"flex"} flexDirection={"column"}>
        <Section>
          <ContentHeader primaryText="General" secondaryText="The template and name of your new workspace." />
          <AvatarTextBox fill text={templates.find(template => template.id === selectedTemplate)?.name} />
          <TextField
            autoFocus
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Workspace Name"
            helperText={workspaceNameError}
            error={!!workspaceNameError}
            onBlur={(event) => {
              /**
               * This prevents the blur from triggering an invalidation when the Dialog
               * Action buttons are clicked. Meh.
               */
              const action = (event.relatedTarget as HTMLElement)?.closest(".MuiDialogActions-root")
              if (!action && !event.target.value) {
                dispatch({ type: "set_workspace_name_error" })
              }
            }}
            onChange={(event) => {
              dispatch({ type: "set_workspace_name", name: event.target.value })
            }}
          />
        </Section>
        <Section>
          <ContentHeader primaryText="Workspace Owner" secondaryText="Only admins can create workspace for other users." />
          <ScrollBox fill sx={{ height: "40rem" }} />
        </Section>
        <Section>
          <ContentHeader primaryText="Parameters" secondaryText="These parameters are provided by your template's Terraform configuration and can be changed after creating the workspace." />
          <ScrollBox fill sx={{ height: "40rem" }} />
        </Section>
      </Box>
    </ScrollBox>
  )
}

export default CreateWorkspaceConfigureStep