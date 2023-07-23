import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from './AppBar';
import { NavItem } from '../@types/nav';
import Workspaces from './Workspaces/Workspaces';
import Templates from './Templates/Templates';
import { TemplatesProvider } from './Templates/TemplatesContext';
import { Link } from "@mui/material";
import PageContentLayout from "./PageContentLayout";
import Workspace from "./Workspaces/Workspace";
import { WorkspacesProvider } from "./Workspaces/WorkspacesContext";

const Audit = () => <div>audit</div>
const Users = () => <div>users</div>
const Deployment = () => <div>deployment</div>
const NoMatch = () => (
  <PageContentLayout>
    <div>Nothing here. Go to <Link href={`/${NavItem.templates}`}>
      Workspaces
    </Link></div>
  </PageContentLayout>
)

const Home = () => <Navigate to={`/${NavItem.workspaces}`} />

function Router() {
  return (
    <BrowserRouter>
      <TemplatesProvider>
        <WorkspacesProvider>
          <AppBar />
          <Routes>
            <Route path={`/${NavItem.workspaces}`} element={<Workspaces />} />
            <Route path={`/${NavItem.templates}`} element={<Templates />} />
            <Route path={`/${NavItem.users}`} element={<Users />} />
            <Route path={`/${NavItem.audit}`} element={<Audit />} />
            <Route path={`/${NavItem.deployment}`} element={<Deployment />} />
            <Route path="workspaces/:username/:workspace" element={<Workspace />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </WorkspacesProvider>
      </TemplatesProvider>
    </BrowserRouter>
  );
}
export default Router;