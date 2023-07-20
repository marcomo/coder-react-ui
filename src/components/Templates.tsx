import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Template } from '../@types/template';
import TemplatesTable from './TemplatesTable';

const templates: Template[] = Array.from(Array(15)).map((num, idx) => ({
  name: `docker-code-server-${idx < 10 ? "0" + idx : idx}`,
  usedBy: 2,
  buildTime: 20,
  lastUpdated: 1689379200
}))
const Templates: React.FunctionComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Box display="flex" flexDirection="column" gap={1} mb={4}>
        <Typography variant='h1'>Templates</Typography>
        <Typography variant='h2'>Select a template to create a workspace.</Typography>
      </Box>
      <TemplatesTable templates={templates} />
    </Container>
  )
}

export default Templates;