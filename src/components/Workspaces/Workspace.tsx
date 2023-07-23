import React from "react";
import PageContentLayout from "../PageContentLayout";
import ContentHeader from "../ContentHeader";
import { useParams } from "react-router-dom";

const Workspace: React.FunctionComponent = () => {
  let { workspace } = useParams();
  return (
    <PageContentLayout>
      <ContentHeader primaryText={workspace || ""} secondaryText="@username" />
    </PageContentLayout>
  )
}

export default Workspace;