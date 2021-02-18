import React, { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  FooterAttributes?: any;
};

const DefaultLayout = (props: Props) => (
  <>
    {/* <Header /> */}
    {props.meta}
    {props.children}
    {/* <Footer attributes={FooterAttributes}/> */}
  </>
);

export default DefaultLayout;
