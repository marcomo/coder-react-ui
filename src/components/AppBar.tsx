import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import CoderIcon from './CoderIcon';
import { Link } from "@mui/material";
import { NavItem } from '../@types/nav';

const AppBar: React.FunctionComponent = (props) => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar disableGutters>
        <Link href="/">
          <CoderIcon />
        </Link>
        <Box display="flex">
          {Object.values(NavItem).map((item) => (
            <Button variant='contained' color='neutral' key={item} to={`/${item}`} component={NavLink} sx={{ height: "4rem", textTransform: "capitalize" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar;