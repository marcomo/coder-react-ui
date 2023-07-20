import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import CoderIcon from './CoderIcon';
import { NavMenu } from '../@types/nav';

const AppBar: React.FunctionComponent<{navMenu: NavMenu}> = (props) => {
  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CoderIcon />
          <Box sx={{display: "flex"}}>
            {props.navMenu.map((item) => (
              <Button variant='contained' key={item.path} to={item.path} component={NavLink}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar;