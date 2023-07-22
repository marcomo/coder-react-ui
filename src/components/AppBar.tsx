import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import CoderIcon from './CoderIcon';
import { NavMenu } from '../@types/nav';
import { Link } from "@mui/material";

const AppBar: React.FunctionComponent<{ navMenu: NavMenu }> = (props) => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar disableGutters>
        <Link href="/">
          <CoderIcon />
        </Link>
        <Box display="flex">
          {Object.values(props.navMenu).map((item) => (
            <Button variant='contained' color='neutral' key={item.path} to={item.path} component={NavLink} sx={{ height: "4rem" }}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar;