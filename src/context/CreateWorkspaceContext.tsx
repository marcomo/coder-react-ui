import React, { createContext, useContext } from 'react';

type Context = {
  selectedTemplate: string | undefined
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string | undefined>>
  dialogOpen: boolean
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  wizardStep: number
  setWizardStep: React.Dispatch<React.SetStateAction<number>>
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