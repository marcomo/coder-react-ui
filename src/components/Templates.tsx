import React from 'react';
import TemplatesTable from './TemplatesTable';
import ContentHeader from './ContentHeader';
import PageContentLayout from './PageContentLayout';
import { Box } from '@mui/material';
import NoScrollBox from './NoScrollBox';

const Templates: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <Box mb={4}>
        <ContentHeader
          primaryText='Templates'
          secondaryText='Select a template to create a workspace.'
        />
      </Box>
      <NoScrollBox>
        <TemplatesTable handleRowClick={() => {}} />
      </NoScrollBox>
    </PageContentLayout>
  )
}

export default Templates;