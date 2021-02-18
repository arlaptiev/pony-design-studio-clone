import React from 'react';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Home from 'components/templates/Home';
import { GetStaticProps, NextPage } from 'next';
import { Meta } from 'utils/Meta';

interface Props {
  HomeAttributes: any;
  FooterAttributes: any;
}

const HomePage: NextPage<Props> = ({ HomeAttributes, FooterAttributes }) => (
  <>
    <DefaultLayout meta={<Meta />} FooterAttributes={FooterAttributes}>
      <Home attributes={HomeAttributes} />
    </DefaultLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const featuredWorks = ((context) => {
    const keys = context.keys();
    const values = keys.map(context) as any;

    const data = keys.map((_, index) => {
      const work = values[index];
      return work;
    });

    return data;
  })(require.context('../content/works', true, /\.md$/));

  const comments = ((context) => {
    const keys = context.keys();
    const values = keys.map(context) as any;

    const data = keys.map((_, index) => {
      const comment = values[index];
      return comment;
    });

    return data;
  })(require.context('../content/comments', true, /\.md$/));

  return { props: { HomeAttributes: { featuredWorks }, FooterAttributes: comments } };
};

export default HomePage;
