import React, { PropsWithChildren, createContext, useContext } from 'react';
import { Template } from './template';

export const templates: Template[] = Array.from(Array(15)).map((num, idx) => ({
  name: `docker-code-server-${idx < 10 ? "0" + idx : idx}`,
  id: `000${idx}`,
  usedBy: 2,
  buildTime: 20,
  lastUpdated: 1689379200
}))

export const TemplatesContext = createContext<Template[]>([])

export const TemplatesProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <TemplatesContext.Provider value={templates}>{children}</TemplatesContext.Provider>
  )
}

export const useTemplates = () => {
  return useContext(TemplatesContext)
}