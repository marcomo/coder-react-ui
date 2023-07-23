import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import {
  WorkspacesReducer as Reducer,
  WorkspacesState as State,
  WorkspacesAction as Action,
  WorkspacesContext as Context
} from "./types";

export const initialState: State = {
  workspaces: []
};

const initializeWorkspacesState = (initialState: State) => {
  return initialState;
}

const reducer: Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return { workspaces: [...state.workspaces, { name: action.workspaceName }] }

    default:
      return { workspaces: [...state.workspaces] }
  }
}

export const WorkspacesContext = createContext<Context>({} as Context)

export const WorkspacesProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer, State>(
    reducer,
    initialState,
    initializeWorkspacesState
  );

  return (
    <WorkspacesContext.Provider value={{ ...state, dispatch }}>{children}</WorkspacesContext.Provider>
  )
}

export const useWorkspaces = () => {
  return useContext(WorkspacesContext)
}