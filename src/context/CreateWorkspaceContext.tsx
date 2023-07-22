import React, { createContext, useContext } from 'react';

type SetState<T = undefined> = React.Dispatch<React.SetStateAction<T>>

export type Context = {
  selectedTemplate: string | undefined
  setSelectedTemplate: SetState<Context["selectedTemplate"]>
  dialogOpen: boolean
  setDialogOpen: SetState<Context["dialogOpen"]>
  wizardStep: number
  setWizardStep: SetState<Context["wizardStep"]>
}

export const CreateWorkspaceContext = createContext<Context>({} as Context)

export const CreateWorkspaceProvider: React.FunctionComponent<{ value: Context }> = (props) => {
  return (
    <CreateWorkspaceContext.Provider value={props.value}>{props.children}</CreateWorkspaceContext.Provider>
  )
}

export const useCreateWorkspace = () => {
  return useContext(CreateWorkspaceContext)
}