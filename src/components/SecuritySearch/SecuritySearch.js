import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../AppContext';

import RoundGraph from '../RoundGraph';
import CustomDropdown from '../CustomDropdown';
import ErrorMessage from '../ErrorMessage';
import SingleSlider from '../SingleSlider';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);
library.add(faSearch);

import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AwesomeDebouncePromise from 'awesome-debounce-promise';
import classNames from 'classnames';

const SECURITIES_PER_PAGE = 10;
const securityTemp = {
  b: 70,
  currency: 'EUR',
  d: 4,
  g: 3,
  id: 'bjo5t',
  isIdea: true,
  liveData: {
    changePercent: -1.0183,
    cumulativeVolume: 33,
    dateTime: '2019-03-11T15:22:07.766Z',
    dayHigh: 0.972,
    dayLow: 0.972,
    last: 0.972,
    netChange: -0.01,
    open: 0.972,
    totalTurnoverCurrency: 32.076
  },
  name: '11 88 0 Solutions',
  sector: 'CommercialServices',
  t: 12,
  ticker: 'TGT',
  v: 70
};
const items = ['All values', 'Dividend', 'Balance', 'Growth', 'Value'];


const years = [2016,2017,2018,2019];

// you will export this query because when you create the mutation,
// you can refetch this query when doing mutations like add to portfolio
export const SECURITIES_QUERY = gql`
  query Securities($filter: SecurityFilterInput, $offset: Int, $limit: Int) {
    securities(filter: $filter, offset: $offset, limit: $limit) @connection(key: "security", filter: ["filter"]) {
      id
      name
      type
      t
      d
      b
      g
      v
    }
  }
`;

const SecuritySearch = () => {
  const [inputIsLoading, setInputIsLoading] = useState(false);
  const { securityFilterText, setSecurityFilterText } = useContext(AppContext);
  const { securityFilterYear, setSecurityFilterYear } = useContext(AppContext);
  const [securityFilterTextInput, setSecurityFilterTextInput] = useState(securityFilterText);
  const [securityFilterYearInput, setSecurityFilterYearInput] = useState(securityFilterYear);
    
  const inputEl = useRef();

  
  useEffect(() => {
    inputEl.current && inputEl.current.focus && inputEl.current.focus();
  });

  const setFilterText = text => setSecurityFilterText(text);
  const setFilterTextDebounced = AwesomeDebouncePromise(setFilterText, 1000);

  const setFilterYear = year => setSecurityFilterYear(+year);
  const setFilterYearDebounced = AwesomeDebouncePromise(setFilterYear, 1000);

  const handleFilterTextChange = async text => {
    setInputIsLoading(true);
    setSecurityFilterTextInput(text);

    await setFilterTextDebounced(text);
    setInputIsLoading(false);
  };

  const handleFilterYearChange = async year => {
    setInputIsLoading(true);
    setSecurityFilterYearInput(year);

    await setFilterYearDebounced(year);
    setInputIsLoading(false);
  };

  const handleCheckBoxStates = (index, checkStates) => {
    console.log(index, 'from parent')
    console.log(checkStates, 'from parent')
  }
  // useEffect(() => {
  //   if (process.browser && currentSecurities.length > 0) {
  //     const unsubscribe = subscribeToSecurities(currentSecurities.map(s => s.id));
  //     return () => unsubscribe();
  //   }
  //   return () => {};
  // });

  return (
    <div>
      <div className="columns is-mobile" style={{ justifyContent: 'center' }}>
        <div
          className="column is-three-quarters-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd"
          style={{ display: 'flex', justifyContent: 'center' }}
          data-testid="test-input"
        >
          <p className="control has-icons-left" style={{ width: 'inherit', paddingRight: 'inherit' }}>
            <input
              className="input"
              type="text"
              value={securityFilterTextInput}
              onChange={async event => {
                await handleFilterTextChange(event.target.value);
              }}
              ref={inputEl}
              placeholder="Search a specific stock... "
            />
            {/* <input
              className="input"
              type="text"
              value={securityFilterYearInput}
              onChange={async event => {
                await handleFilterYearChange(event.target.value);
              }}
              ref={inputEl}
              placeholder="Search a specific stock... "
            /> */}
          </p>
          <button className="button" style={{ backgroundColor: '#b9b9b9', color: 'white', fontStyle: 'italic' }}>
            Use VEB-filter
          </button>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column">
          <h3 class="subtitle is-6 has-text-centered" style={{ height: '20px', color: '#a9a9a9' }}>
            All stocks show an average rating score based on Dividend, Balance, Growth and Value.
          </h3>
        </div>
      </div>
      <div className="columns is-mobile" style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around' }}>        
        <div className="column" style={{ paddingTop: '25px' }}>
          <CustomDropdown key={0} title="Large caps" items={[]} idx={0} handleCheckBoxStates={handleCheckBoxStates} hasSlider={false} />
        </div>
        <div className="column" style={{ paddingTop: '25px' }}>
          <CustomDropdown key={1} title="All values" items={items} idx={1} handleCheckBoxStates={handleCheckBoxStates} hasSlider={false}/>
        </div>
        <div className="column" style={{ paddingTop: '25px' }}>
          <CustomDropdown key={2} title="All areas" items={items} idx={2} handleCheckBoxStates={handleCheckBoxStates} hasSlider={true}/>
        </div>
        <div className="column" style={{ paddingTop: '25px' }}>
          <CustomDropdown key={3} title="All sectors" items={[]} idx={3} handleCheckBoxStates={handleCheckBoxStates} hasSlider={false}/>
        </div>
    
        <div className="column">
          <SingleSlider
            // onChangeYear={this.handleChangeYear}
            width={400}
            height={70}
            years={years}
          />
        </div>
      </div>
      <Query
        query={SECURITIES_QUERY}
        variables={{
          filter: {
            name: securityFilterText,
            year: securityFilterYear,
            sectors: null
          },
          offset: 0,
          limit: SECURITIES_PER_PAGE
        }}
      >
        {({ loading, error, data: { securities }, fetchMore }) => {
          if (error) return <ErrorMessage message="Error loading posts." />;
          if (loading)
            return (
              <div className="columns is-mobile" style={{ justifyContent: 'center' }}>
                <FontAwesomeIcon icon="spinner" spin />
              </div>
            );

          //const areMoreSecurities = allSecurities.length < _allSecuritiesMeta.count;
          const areMoreSecurities = securities.length < 3600;
          return (
            <section style={{ paddingTop: '20px' }}>
              <div
                className="columns is-mobile"
                style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around' }}
              >
                {securities.map((s, k) => (
                  <div
                    class="box has-text-grey"
                    key={s.id}
                    style={{ borderRadius: '1px', height: '320px', paddingTop: '0.6em', paddingRight: '0.1em' }}
                  >
                    <div className="columns" style={{ width: '230px', height: '28px' }}>
                      <div className="column is-8">
                        <Link key={s.id} href={`/security?id=${s.id}`} as={`/security/${s.id}`}>
                          <h3
                            class="subtitle is-5 has-text-weight-bold has-text-grey"
                            style={{
                              width: '130px',
                              height: '50px',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {s.name}
                          </h3>
                        </Link>
                      </div>
                      <div className="column is-2">
                        <a class="button is-dark is-small has-text-weight-bold" style={{ backgroundColor: '#7d7d7d' }}>
                          &nbsp;+&nbsp;
                        </a>
                      </div>
                      <div className="column is-1">
                        <a class="button is-dark is-small has-text-weight-bold" style={{ backgroundColor: '#7d7d7d' }}>
                          ...
                        </a>
                      </div>
                    </div>
                    <div style={{ height: '18px', fontSize: '11pt' }}>$100 +2.76%</div>
                    <div style={{ height: '2px', fontSize: '11pt' }}>{s.name}</div>
                    <hr />
                    <div className={'RoundGraph' + k} style={{ width: '230px', height: '200px' }}>
                      <RoundGraph key={k} index={k} security={securityTemp} />
                    </div>
                  </div>
                ))}
              </div>
              {areMoreSecurities ? (
                <button onClick={() => loadMoreSecurities(securities, fetchMore)}>
                  {' '}
                  {loading ? 'Loading...' : 'Show More'}{' '}
                </button>
              ) : (
                ''
              )}
            </section>
          );
        }}
      </Query>
    </div>
  );
};

function loadMoreSecurities(securities, fetchMore) {
  fetchMore({
    variables: {
      offset: securities.length
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return prev;
      }
      return Object.assign({}, prev, {
        // Append the new posts results to the old one
        securities: [...prev.securities, ...fetchMoreResult.securities]
      });
    }
  });
}


export default SecuritySearch;
