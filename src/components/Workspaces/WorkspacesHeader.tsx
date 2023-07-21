import { Box, Link } from "@mui/material";
import React from "react";
import ContentHeader from "../ContentHeader";
import { navMenu } from "../Router";
import { NavItem } from "../../@types/nav";

const WorkspacesHeader: React.FunctionComponent = () => {
  return (
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
  )
}

export default WorkspacesHeader;