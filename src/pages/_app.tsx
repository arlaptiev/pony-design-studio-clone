import React from 'react';

import { AppProps } from 'next/app';

import 'styles/main.css';
import 'styles/fonts.css';
import 'styles/images-sizing.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
