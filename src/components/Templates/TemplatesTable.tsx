import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { useTemplates } from '../../context/TemplatesContext';
import { SxProps, Theme } from "@mui/material";
import AvatarTextBox from "../AvatarTextBox";
dayjs.extend(relativeTime)

type Props = {
  handleRowClick(id: string): void
  selectedID?: string
  sx?: SxProps<Theme>
}

const TemplatesTable: React.FunctionComponent<Props> = (props) => {
  const templates = useTemplates()
  return (
    <TableContainer sx={props.sx}>
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
            <TableCell align="right">Used by</TableCell>
            <TableCell align="right">Build Time</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {templates.map((template) => {
            const selected = props.selectedID === template.id
            return (
              <TableRow
                hover
                selected={selected}
                key={template.name}
                onClick={() => props.handleRowClick(template.id)}
                sx={{
                  '& th:first-child': { pl: 2 },
                  '& td:last-child': { pr: 2 },
                  '&:last-child td, &last-child th': { border: 0 }
                }}
              >
                <TableCell component="th" scope="row">
                  <AvatarTextBox
                    text={template.name}
                    sx={selected ? { bgcolor: "var(--color-ink-100)", color: "var(--color-emphasis)" } : {}}
                    checkable
                    isChecked={selected}
                  />
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
            )
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TemplatesTable;