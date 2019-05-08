import React from 'react';

import { render, fireEvent, waitForElement, waitForElementToBeRemoved } from 'react-testing-library';

require('react-testing-library/cleanup-after-each');
require('jest-dom/extend-expect');

import fetch from 'isomorphic-unfetch/index';
import ApolloClient from 'apollo-client/index';
import { InMemoryCache } from 'apollo-cache-inmemory/lib/index';
import { HttpLink } from 'apollo-link-http/lib/index';
import { ApolloProvider } from 'react-apollo/index';
import gql from 'graphql-tag';

import { AppProvider } from '../AppContext';
import SecuritySearch from './index';

const link = new HttpLink({
  uri: 'https://vde-app4.app.veb.net/graphql', // Server URL (must be absolute)
  credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
  // Use fetch() polyfill on the server
});

const cache = new InMemoryCache().restore({});
const client = new ApolloClient({
  connectToDevTools: false,
  ssrMode: true,
  link,
  fetch,
  cache,
  resolvers: {
    Security: {
      isInLocalPortfolio: (security, _args, { cache }) => {
        // console.log('the id is: ', security.id);
        // const { cartItems } = cache.readQuery({
        //   query: GET_CART_ITEMS
        // });
        //return cartItems.includes(launch.id);
        // todo: make some sensitive defaults
        return false;
      }
    },
    Mutation: {
      toggleLocalPortfolio: (_root, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'Security', id: variables.id });
        const fragment = gql`
          fragment localPortfolio on Security {
            isInLocalPortfolio
          }
        `;
        const security = cache.readFragment({ fragment, id });
        const data = { ...security, isInLocalPortfolio: !security.isInLocalPortfolio };
        cache.writeData({ id, data });
        return null;
      }
    }
  }
});

beforeAll(() => {});
jest.setTimeout(30000); // 1 second

describe('SecuritySearch', () => {
  it('renders', () => {
    const { getByPlaceholderText } = render(
      <ApolloProvider client={client}>
        <AppProvider>
          <SecuritySearch />
        </AppProvider>
      </ApolloProvider>
    );
    const input = getByPlaceholderText(/Search a specific stock.../i);
    expect(input).toBeDefined();
    //expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveClass('input');
  });
  it('retrieves multiple securities and filters when typing text', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <ApolloProvider client={client}>
        <AppProvider>
          <SecuritySearch />
        </AppProvider>
      </ApolloProvider>
    );

    await waitForElementToBeRemoved(() => {
      return getByTestId('spinner');
    }, {timeout: 10000});

    expect(getByTestId('filtered-securities').children).toHaveLength(10);
    const input = getByPlaceholderText(/Search a specific stock.../i);

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'KPN' } });
    expect(input.value).toBe('KPN');

    await waitForElement(
      () => {
        return getByTestId('spinner');
      },
      { timeout: 10000 }
    );

    await waitForElementToBeRemoved(() => {
      return getByTestId('spinner');
    });

    const kpn = await waitForElement(
      () => {
        return getByText(/KPN/);
      },
      { timeout: 25000 }
    );
    expect(kpn).toBeDefined();
    expect(getByTestId('filtered-securities').children).toHaveLength(1);
  });
});
