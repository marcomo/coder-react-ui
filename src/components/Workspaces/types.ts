import { Reducer } from "react";

export type Context = {
  selectedTemplate: string | undefined
  workspaceName: string | undefined
  workspaceNameError: string | undefined
  dialogOpen: boolean
  wizardStep: number
  stepIsValid: boolean
  dispatch: React.Dispatch<Action>
}

export type Action =
  | { type: "reset" }
  | { type: "set_template", id: Context["selectedTemplate"] }
  | { type: "set_workspace_name", name: string }
  | { type: "set_workspace_name_error", error: string }
  | { type: "increment_step" }
  | { type: "open_dialog" }
  | { type: "close_dialog" }
  ;

export type CreateWorkspaceReducer = Reducer<State, Action>

export type State = Omit<Context, "dispatch">