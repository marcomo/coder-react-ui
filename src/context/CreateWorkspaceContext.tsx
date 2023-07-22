import React, { createContext, useContext, useReducer } from 'react';
import { Action, CreateWorkspaceReducer as Reducer, Context, State } from "../components/Workspaces/types";

const initialState = { selectedTemplate: undefined, dialogOpen: false, wizardStep: -1 };

const initializeCreateWorkspaceState = (initialState: State) => {
  return initialState;
}

const reducer: Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_template":
      return { ...state, selectedTemplate: action.id }

    case "open_dialog":
      return { ...state, dialogOpen: true, wizardStep: 0 }

    case "close_dialog":
      return { ...state, dialogOpen: false }

    case "increment_step":
      return { ...state, wizardStep: state.wizardStep + 1 }

    case "reset":
      return initialState;

    default:
      return { ...state }
  }
};


export const CreateWorkspaceContext = createContext<Context>({} as Context)

export const CreateWorkspaceProvider: React.FunctionComponent = (props) => {
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