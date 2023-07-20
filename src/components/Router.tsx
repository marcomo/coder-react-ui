import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from './AppBar';
import { NavMenu } from '../@types/nav';

const navMenu: NavMenu = [
  {
    label: "Workspaces",
    value: "workspaces",
    path: "/workspaces",
  },
  {
    label: "Templates",
    value: "templates",
    path: "/templates"
  },
  {
    label: "Users",
    value: "users",
    path: "/users"
  },
  {
    label: "Audit",
    value: "audit",
    path: "/audit"
  },
  {
    label: "Deployment",
    value: "deployment",
    path: "/deployment/general"
  }
]

function App() {
  return (
    <Router>
      <AppBar navMenu={navMenu} />
      <Routes>
        {
          navMenu.map((item) => (
            <Route key={item.path} path={item.path} Component={() => <div>{item.label}</div>  } />
          ))
        }
      </Routes>
    </Router>
  );
}
export default App;