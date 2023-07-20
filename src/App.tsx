import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CoderIcon from './components/CoderIcon';
import './App.scss';

const navMenu: {value: string, label: string, route: string}[] = [
  {
    label: "Workspaces",
    value: "workspaces",
    route: "/workspaces",
  },
  {
    label: "Templates",
    value: "templates",
    route: "/templates"
  },
  {
    label: "Users",
    value: "users",
    route: "/users"
  },
  {
    label: "Audit",
    value: "audit",
    route: "/audit"
  },
  {
    label: "Deployment",
    value: "deployment",
    route: "/deployment/general"
  }
]

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CoderIcon />
            <Box sx={{display: "flex"}}>
              {navMenu.map((item) => (
                <Button variant='contained' key={item.route} href={item.route}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;

