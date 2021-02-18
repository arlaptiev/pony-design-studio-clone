import React from 'react';

import { Head } from 'next/document';

const Fonts = () => (
  <Head>
    <link
      rel="preload"
      href="/assets/fonts/Neuzeit Grotesk Regular.woff"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/assets/fonts/ITC Avant Garde Pro Bold.woff"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/assets/fonts/Neuzeit Grotesk Bold.woff"
      as="font"
      crossOrigin=""
    />
    <link rel="stylesheet" href="/fonts/fonts.css" />
  </Head>
);

export { Fonts };
