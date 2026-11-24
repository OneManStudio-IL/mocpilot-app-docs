import React from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import HubFilter, {isHubFilterPage} from '@site/src/components/HubFilter';

// Block pages with hub-specific blocks get the sticky hub filter bar above the content
export default function ContentWrapper(props) {
  const {metadata} = useDoc();
  if (!isHubFilterPage(metadata.id)) {
    return <Content {...props} />;
  }
  return (
    <>
      <HubFilter />
      <Content {...props} />
    </>
  );
}
