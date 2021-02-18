import React from 'react';

import PostLayout from 'components/layouts/PostLayout';
import Post, { PostAttributes } from 'components/templates/Post';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Meta } from 'utils/Meta';

interface Props {
  content: {
    attributes: PostAttributes
    html: string;
  };
}

const BlogDetailPage: React.FC<Props> = ({ content }) => {
  const { title, description, image } = content.attributes;

  return (
    <>
      <PostLayout
        meta={<Meta title={title} description={description} image={{ url: image }} />}
      >
        <Post attributes={content.attributes} html={content.html} />
      </PostLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`../../content/posts/${params.slug}.md`);

  return { props: { content: content.default } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../content/posts', true, /\.md$/));

  const paths = postSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailPage;
