import App, { Container } from 'next/app';
import React from 'react';

import { withRouter } from 'next/router';

import { IntlProvider, addLocaleData } from 'react-intl';

import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import { AppProvider } from '../components/AppContext';

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;
    const initialNow = Date.now();

    return { pageProps, locale, messages, initialNow };
  }
  render() {
    const { Component, pageProps, locale, messages, initialNow, apolloClient } = this.props;
    return (
      <Container>
        <IntlProvider locale="en">
          <ApolloProvider client={apolloClient}>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </ApolloProvider>
        </IntlProvider>
      </Container>
    );
  }
}

export default withRouter(withApolloClient(MyApp));
