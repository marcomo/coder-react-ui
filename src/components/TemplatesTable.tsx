import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import Box from '@mui/material/Box';
import { useTemplates } from '../context/TemplatesContext';
dayjs.extend(relativeTime)

type Props = {
  handleRowClick(id: string): void
  selectedID?: string
}

const TemplatesTable: React.FunctionComponent<Props> = (props) => {
  const templates = useTemplates()
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead
          sx={{
            '& th:first-child': { paddingLeft: "2rem" },
            '& th:last-child': { paddingRight: "2rem" },
            '&:last-child td, &last-child th': { border: 0 }
          }}
        >
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Used by</TableCell>
            <TableCell align="right">Build Time</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {templates.map((template) => (
            <TableRow
              selected={props.selectedID == template.id}
              key={template.name}
              onClick={() => props.handleRowClick(template.id)}
              sx={{
                '& th:first-child': { paddingLeft: "2rem" },
                '& td:last-child': { paddingRight: "2rem" },
                '&:last-child td, &last-child th': { border: 0 }
              }}
            >
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center" gap="1rem">
                  <Avatar>{template.name[0].toUpperCase()}</Avatar>
                  {template.name}
                </Box>
              </TableCell>
              <TableCell align="right">{
                (template.usedBy || "0") + " developers"
              }</TableCell>
              <TableCell align="right">{
                template.buildTime + "s"
              }</TableCell>
              <TableCell align="right">{
                dayjs.unix(template.lastUpdated).fromNow()
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TemplatesTable;