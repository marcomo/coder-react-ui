import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from './AppBar';
import { NavMenu, NavItem } from '../@types/nav';
import Workspaces from './Workspaces';
import Templates from './Templates';

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
}

function App() {
  return (
    <Router>
      <AppBar navMenu={navMenu} />
      <Routes>
        {
          Object.values(navMenu).map((item) => (
            <Route key={item.path} path={item.path} Component={Components[item.value]} />
          ))
        }
      </Routes>
    </Router>
  );
}
export default App;