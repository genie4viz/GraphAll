import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import RoundGraph from '../RoundGraph';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export const TOGGLE_LOCAL_PORTFOLIO_MUTATION = gql`
  mutation ToggleLocalPortfolio($id: String!) {
    toggleLocalPortfolio(id: $id) @client
  }
`;

const LocalPortfolioContainer = props => {
  const { security } = props;

  return (
    <Mutation mutation={TOGGLE_LOCAL_PORTFOLIO_MUTATION} variables={{ id: security.id }}>
      {toggleLocalPortfolio => (
        <LocalPortfolio {...props} toggleLocalPortfolio={() => toggleLocalPortfolio(security.id)} />
      )}
    </Mutation>
  );
};

const LocalPortfolio = ({ security, index, showGraphCase, year, toggleLocalPortfolio }) => {
  let year_data = security.calculatedCircular;
  let matched_data = null;
  for (let i = 0; i < year_data.length; i++) {
    if (year_data[i].Year === year) {
      matched_data = year_data[i];
      break;
    }
  }

  return (
    <div
      className="box has-text-grey"
      key={security.id}
      style={{ borderRadius: '1px', height: '320px', padding: '10px' }}
    >
      <div className="columns" style={{ width: '230px', height: '28px' }}>
        <div className="column is-8">
          <Link key={security.id} href={`/security?id=${security.id}`} as={`/security/${security.id}`}>
            <h3
              className="subtitle is-5 has-text-weight-bold has-text-grey"
              style={{
                width: '130px',
                height: '50px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
            >
              {security.name}
            </h3>
          </Link>
        </div>
        <div className="column is-2">
          <a
            className="button is-dark is-small has-text-weight-bold"
            style={{ backgroundColor: '#7d7d7d' }}
            onClick={() => toggleLocalPortfolio()}
          >
            {security.isInLocalPortfolio ? '-' : '+'}
          </a>
        </div>
        <div className="column is-1">
          <Link key={security.id} href={`/security?id=${security.id}`} as={`/security/${security.id}`}>
            <a className="button is-dark is-small has-text-weight-bold" style={{ backgroundColor: '#7d7d7d' }}>
              ...
            </a>
          </Link>
        </div>
      </div>
      <div style={{ height: '18px', fontSize: '11pt' }}>€100 +2.76%</div>
      <div style={{ height: '2px', fontSize: '11pt' }}>{security.sector}</div>
      <hr />
      <div className={'RoundGraph' + security.id} style={{ width: '230px', height: '200px' }}>
        {matched_data != null ? (
          <RoundGraph key={security.id} index={security.id} params={matched_data} showGraphCase={showGraphCase} />
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};
export default LocalPortfolioContainer;
