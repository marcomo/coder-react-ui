import React from 'react';
import TemplatesTable from './TemplatesTable';
import ContentHeader from '../ContentHeader';
import PageContentLayout from '../PageContentLayout';
import { Box } from '@mui/material';
import ScrollBox from '../ScrollBox';

const Templates: React.FunctionComponent = () => {
  return (
    <PageContentLayout>
      <Box mb={4}>
        <ContentHeader
          primaryText='Templates'
          secondaryText='Select a template to create a workspace.'
        />
      </Box>
      <ScrollBox sx={{ p: 0 }}>
        <TemplatesTable handleRowClick={() => { }} />
      </ScrollBox>
    </PageContentLayout>
  )
}

export default Templates;