import React, { useState } from "react";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import ContentHeader from "../ContentHeader";
import ScrollBox from "../ScrollBox";
import { templates } from "../../context/TemplatesContext";
import { Box, TextField } from "@mui/material";
import AvatarTextBox from "../AvatarTextBox";

// TODO: Move to seperate file
const Section: React.FunctionComponent = (props) => {
  return (
    <Box component="section" display={"flex"} flexDirection={"column"} gap={1} pb={4}>
      {props.children}
    </Box>
  )
}

const CreateWorkspaceConfigureStep: React.FunctionComponent = () => {
  const { selectedTemplate, workspaceNameError, dialogOpen, dispatch } = useCreateWorkspace()

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
               * Not ideal. This prevents the blur from triggering an invalidation when the cancel button
               * of the Dialog is closed.
               */
              const relatedTargetText = (event.relatedTarget as HTMLElement).innerText.toLowerCase()
              if (relatedTargetText !== "cancel" && !event.target.value) {
                dispatch({ type: "set_workspace_name_error", error: "Please enter a workspace name." })
              }
            }}
            onChange={(event) => {
              if (workspaceNameError && event.currentTarget.value) dispatch({ type: "set_workspace_name_error", error: "Please enter a workspace name." })
              dispatch({ type: "set_workspace_name", name: event.currentTarget.value })
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