import React, { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const DarkButton = (props: Props) => (
  <a
    href={props.href}
    className={`btn btn-blue-circle-animated mb-1 font-display bg-black text-white hover:bg-black hover:border-black ${props.className}`}
  >
    {props.children}
  </a>
);
