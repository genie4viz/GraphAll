import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import gql from 'graphql-tag';

let apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://vde-app4.app.veb.net/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !process.browser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {}),
    typeDefs: gql`
      extend type Security {
        isInLocalPortfolio: Boolean!
      }
    `,
    resolvers: {
      Security: {
        isInLocalPortfolio: (security, _args, { cache }) => {
          // todo: implement this
          //console.log('the id is: ', security.id);
          // const { cartItems } = cache.readQuery({
          //   query: GET_CART_ITEMS
          // });
          //return cartItems.includes(launch.id);
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
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
