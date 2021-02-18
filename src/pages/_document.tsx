import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { Fonts } from 'utils/Fonts';

import { Config } from '../utils/Config';
import { GoogleAnalytics4 } from '../utils/GoogleAnalytics4';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
        <Head>
          <GoogleAnalytics4 />
          <Fonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
