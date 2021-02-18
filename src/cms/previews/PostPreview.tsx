import React, { ComponentType } from 'react';

import Post from 'components/templates/Post';

const PostPreview: ComponentType<any> = ({ entry, widgetFor }) => {
  const content = entry.get('data').toJS();
  content.preview_body = widgetFor('body');

  return (
    <>
      <Post attributes={content} html="" />
    </>
  );
};

export default PostPreview;
