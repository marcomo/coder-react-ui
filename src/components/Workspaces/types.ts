import { Reducer } from "react";

export type Context = {
  selectedTemplate: string | undefined
  dialogOpen: boolean
  wizardStep: number
  dispatch: React.Dispatch<Action>
}

export type Action =
  | { type: "reset" }
  | { type: "set_template", id: Context["selectedTemplate"] }
  | { type: "increment_step" }
  | { type: "open_dialog" }
  | { type: "close_dialog" }
  ;

export type CreateWorkspaceReducer = Reducer<State, Action>

export type State = Pick<Context, "selectedTemplate" | "dialogOpen" | "wizardStep">