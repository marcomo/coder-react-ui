import { Reducer } from "react";

export type Context = {
  selectedTemplate: string | undefined
  workspaceName: string | undefined
  workspaceNameError: string | undefined
  buildStage: number
  buildDone: boolean
  dialogOpen: boolean
  wizardStep: number
  stepIsValid: boolean
  dispatch: React.Dispatch<Action>
}

export type Action =
  | { type: "reset" }
  | { type: "set_template", id: Context["selectedTemplate"] }
  | { type: "set_workspace_name", name: string }
  | { type: "set_workspace_name_error" }
  | { type: "increment_build_stage" }
  | { type: "increment_wizard_step" }
  | { type: "decrement_wizard_step" }
  | { type: "open_dialog" }
  | { type: "close_dialog" }
  ;

export type CreateWorkspaceReducer = Reducer<State, Action>

export type State = Omit<Context, "dispatch">

export type BuildStage = {
  id: number
  value: "start" | "image" | "git" | "ides"
  labels: {
    pending: string
    active: string
    done: string
  }
}