import { Reducer } from "react";

export type CreateWorkspaceContext = {
  selectedTemplate: string | undefined
  workspaceName: string | undefined
  workspaceNameError: string | undefined
  workspaceCreating: boolean
  buildStage: number
  buildDone: boolean
  dialogOpen: boolean
  wizardStep: number
  stepIsValid: boolean
  dispatch: React.Dispatch<CreateWorkspaceAction>
}

export type CreateWorkspaceAction =
  | { type: "reset" }
  | { type: "set_template", id: CreateWorkspaceContext["selectedTemplate"] }
  | { type: "set_workspace_name", name: string }
  | { type: "set_workspace_name_error" }
  | { type: "set_workspace_creating" }
  | { type: "clear_workspace_creating" }
  | { type: "increment_build_stage" }
  | { type: "increment_wizard_step" }
  | { type: "decrement_wizard_step" }
  | { type: "open_dialog" }
  | { type: "close_dialog" }
  ;

export type CreateWorkspaceReducer = Reducer<CreateWorkspaceState, CreateWorkspaceAction>

export type CreateWorkspaceState = Omit<CreateWorkspaceContext, "dispatch">

export type BuildStage = {
  id: number
  value: "start" | "image" | "git" | "ides"
  labels: {
    pending: string
    active: string
    done: string
  }
}

export type Workspace = {
  name: string
}

export type WorkspacesContext = {
  workspaces: Workspace[]
  dispatch: React.Dispatch<WorkspacesAction>
}

export type WorkspacesAction =
  | { type: "add", workspaceName: string }
  ;

export type WorkspacesReducer = Reducer<WorkspacesState, WorkspacesAction>

export type WorkspacesState = Omit<WorkspacesContext, "dispatch">
