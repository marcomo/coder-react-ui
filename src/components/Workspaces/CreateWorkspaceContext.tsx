import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import {
  CreateWorkspaceAction as Action,
  CreateWorkspaceReducer as Reducer,
  CreateWorkspaceContext as Context,
  CreateWorkspaceState as State
} from "./types";

const initialState: State = {
  selectedTemplate: undefined,
  workspaceName: undefined,
  workspaceCreating: false,
  dialogOpen: false,
  wizardStep: -1,
  stepIsValid: false,
  workspaceNameError: undefined,
  buildStage: 0,
  buildDone: false
};

const initializeCreateWorkspaceState = (initialState: State) => {
  return initialState;
}

const WORKSPACE_NAME_ERROR = "Please enter a workspace name.";

const reducer: Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_template":
      return { ...state, selectedTemplate: action.id, stepIsValid: true }

    case "set_workspace_name":
      return {
        ...state,
        workspaceName: action.name,
        stepIsValid: !!action.name,
        workspaceNameError: !action.name ? WORKSPACE_NAME_ERROR : undefined
      }

    case "set_workspace_name_error":
      return { ...state, workspaceNameError: WORKSPACE_NAME_ERROR, stepIsValid: false }

    case "set_workspace_creating":
      return { ...state, workspaceCreating: true }

    case "clear_workspace_creating":
      return { ...state, workspaceCreating: false, wizardStep: state.wizardStep + 1 }

    case "increment_build_stage":
      return { ...state, buildStage: state.buildStage + 1, buildDone: state.buildStage + 1 === 4 }

    case "open_dialog":
      return { ...state, dialogOpen: true, wizardStep: 0 }

    case "close_dialog":
      return { ...state, dialogOpen: false }

    case "increment_wizard_step":
      return { ...state, wizardStep: state.wizardStep + 1, stepIsValid: false }

    case "decrement_wizard_step":
      return { ...state, wizardStep: state.wizardStep - 1, stepIsValid: !!state.selectedTemplate }

    case "reset":
      return initialState;

    default:
      return { ...state }
  }
};


export const CreateWorkspaceContext = createContext<Context>({} as Context)

export const CreateWorkspaceProvider: React.FunctionComponent<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer<Reducer, State>(
    reducer,
    initialState,
    initializeCreateWorkspaceState
  );
  return (
    <CreateWorkspaceContext.Provider value={{ ...state, dispatch }}>{props.children}</CreateWorkspaceContext.Provider>
  )
}

export const useCreateWorkspace = () => {
  return useContext(CreateWorkspaceContext)
}