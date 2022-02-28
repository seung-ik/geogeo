import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import GlobalStyle from '@styles/GlobalStyle'
import store from '@store/index';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
