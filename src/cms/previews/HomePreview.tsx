import React, { ComponentType } from 'react';

import Home from 'components/templates/Home';

const HomePreview: ComponentType<any> = ({ entry }) => {
  const content = entry.get('data').toJS();

  return (
    <>
      <Home attributes={content} />
    </>
  );
};

export default HomePreview;
