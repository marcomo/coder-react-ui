import React from 'react';
import { Template } from '../@types/template';
import TemplatesTable from './TemplatesTable';
import ContentHeader from './ContentHeader';
import PageContentLayout from './PageContentLayout';
import { Box } from '@mui/material';

const templates: Template[] = Array.from(Array(15)).map((num, idx) => ({
  name: `docker-code-server-${idx < 10 ? "0" + idx : idx}`,
  usedBy: 2,
  buildTime: 20,
  lastUpdated: 1689379200
}))
const Templates: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <Box mb={4}>
        <ContentHeader
          primaryText='Templates'
          secondaryText='Select a template to create a workspace.'
        />
      </Box>
      <TemplatesTable templates={templates} />
    </PageContentLayout>
  )
}

export default Templates;