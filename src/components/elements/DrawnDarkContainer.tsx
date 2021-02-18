import React, { ReactNode } from 'react';

export const DrawnDarkContainer = (props: { children: ReactNode }) => (
  <>
    <div
      className="h-8 bg-repeat-x bg-bottom -mt-4 transform -rotate-180"
      style={{ backgroundImage: "url('https://pony.studio/assets/drawn-end-bottom.svg'" }}
    />
    <div className="bg-dark text-white text-center pt-12 pb-2 md:pb-8">{props.children}</div>
    <div
      className="h-8 bg-repeat-x bg-top"
      style={{ backgroundImage: "url('https://pony.studio/assets/drawn-end-bottom.svg'" }}
    />
  </>
);
