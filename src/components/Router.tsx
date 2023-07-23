import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from './AppBar';
import { NavMenu, NavItem } from '../@types/nav';
import Workspaces from './Workspaces/Workspaces';
import Templates from './Templates/Templates';
import { TemplatesProvider } from '../context/TemplatesContext';
import { Link } from "@mui/material";
import PageContentLayout from "./PageContentLayout";
import Workspace from "./Workspaces/Workspace";

export const navMenu: NavMenu = Object.keys(NavItem).reduce<NavMenu>((prev, item) => {
  return {
    ...prev,
    [item]: {
      label: item[0].toUpperCase() + item.slice(1),
      value: NavItem[item as NavItem],
      path: `/${item}`,
    }
  }
}, {} as NavMenu)

const Components: { [key: string]: React.ComponentType } = {
  [NavItem.deployment]: () => <div>deployment</div>,
  [NavItem.users]: () => <div>users</div>,
  [NavItem.audit]: () => <div>audit</div>,
  [NavItem.workspaces]: Workspaces,
  [NavItem.templates]: Templates,
  workspace: Workspace,
  home: () => <Navigate to={navMenu[NavItem.workspaces].path} />,
  noMatch: () => (
    <PageContentLayout>
      <div>Nothing here. Go to <Link href={navMenu[NavItem.templates].path}>
        Workspaces
      </Link></div>
    </PageContentLayout>
  ),
}



function Router() {
  return (
    <BrowserRouter>
      <TemplatesProvider>
        <AppBar navMenu={navMenu} />
        <Routes>
          {
            Object.values(navMenu).map((item) => (
              <Route key={item.path} path={item.path} Component={Components[item.value]} />
            ))
          }
          <Route path="workspaces/:username/:workspace" element={<Components.workspace />} />
          <Route path="/" element={<Components.home />} />
          <Route path="*" element={<Components.noMatch />} />
        </Routes>
      </TemplatesProvider>
    </BrowserRouter>
  );
}
export default Router;