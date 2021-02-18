import React, { ReactNode } from 'react';

import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const DefaultLayout = (props: Props) => (
  <>
    {/* <Header /> */}
    {props.meta}
    {props.children}
    {/* <Footer /> */}
  </>
);

export default DefaultLayout;
