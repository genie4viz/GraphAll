import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

export const APP_QUERY = gql`
  query AppQuery {
    allSectors {
      code
      name
    }
  }
`;

export default function withBaseData(Component) {
  return class extends React.Component {
    render() {
      return (
        <Query query={APP_QUERY}>
          {({ loading, error, data: { allSectors } }) => {
            if (error) return <ErrorMessage message="Error loading base data." />;
            if (loading) return <Loading />;
            return <Component {...this.props} allSectors={allSectors} />;
          }}
        </Query>
      );
    }
  };
}