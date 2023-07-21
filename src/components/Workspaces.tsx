import React from 'react';
import ContentHeader from './ContentHeader';
import PageContentLayout from './PageContentLayout';
import { NavItem } from '../@types/nav';
import { navMenu } from './Router';
import { Box, Button, Link, Paper, Table, TableContainer } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const Workspaces: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <Box mb={4}>
        <ContentHeader
          primaryText='Workspaces'
          secondaryText={
            () => (
              <div>
                <span>Create a new workspace from a&nbsp;</span>
                <Link href={navMenu[NavItem.templates].path}>
                  Template
                </Link>
                <span>.</span>
              </div>
            )
          }
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{p: 2}}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
            <ContentHeader
              center
              primaryText='Create a Workspace'
              secondaryText='A workspace is your personal, customizable development environment in the cloud.'
            />
            <Button variant="contained" size="large" color="primary" startIcon={<EastIcon />}>Select a Template</Button>
            <Box sx={{mb: -12}}>
              <img width="500" src="https://raw.githubusercontent.com/coder/coder/2901147ae326b59588c38c1fa4310d2fb738ca2a/site/static/featured/workspaces.webp" alt="Create workspace flow" />
            </Box>
          </Box>
        </Table>
      </TableContainer>
    </PageContentLayout>
  )
}

export default Workspaces;