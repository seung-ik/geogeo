import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyle';
import store from '@store/index';
import { I18nextProvider } from 'react-i18next';
import i18n from '@service/i18n';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Component {...pageProps} />
      </I18nextProvider>
    </Provider>
  );
}

export default MyApp
