import React from 'react';
import { Template } from '../@types/template';
import TemplatesTable from './TemplatesTable';
import ContentHeader from './ContentHeader';
import PageContentLayout from './PageContentLayout';
import { Box } from '@mui/material';

const Templates: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <Box mb={4}>
        <ContentHeader
          primaryText='Templates'
          secondaryText='Select a template to create a workspace.'
        />
      </Box>
      <Box>
        <TemplatesTable handleRowClick={() => {}} />
      </Box>
    </PageContentLayout>
  )
}

export default Templates;