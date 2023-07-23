import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import AvatarTextBox from "../AvatarTextBox";
import { useWorkspaces } from "./WorkspacesContext";
dayjs.extend(relativeTime)

const WorkspaceTable: React.FunctionComponent = (props) => {
  const { workspaces } = useWorkspaces()
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead
          sx={{
            '& th:first-child': { pl: 2 },
            '& th:last-child': { pr: 2 },
            '&:last-child td, &last-child th': { border: 0 }
          }}
        >
          <TableRow>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workspaces.map((workspace) => {
            return (
              <TableRow
                hover
                key={workspace.name}
                sx={{
                  '& th:first-child': { pl: 2 },
                  '& td:last-child': { pr: 2 },
                  '&:last-child td, &last-child th': { border: 0 }
                }}
              >
                <TableCell component="th" scope="row">
                  <AvatarTextBox
                    text={workspace.name}
                    checkable
                  />
                </TableCell>
              </TableRow>
            )
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WorkspaceTable;