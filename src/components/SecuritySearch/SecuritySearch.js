import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../AppContext';

import LocalPortfolio from '../LocalPortfolio';
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
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import AwesomeDebouncePromise from 'awesome-debounce-promise';
import classNames from 'classnames';

const SECURITIES_PER_PAGE = 10;

const items = [
  {id: 0, label: 'All values', value: true},
  {id: 1, label: 'Dividend', value: true},
  {id: 2, label: 'Balance', value: true},
  {id: 3, label: 'Growth', value: true},
  {id: 4, label: 'Value', value: true}
];
const years = [2013, 2014, 2015, 2016, 2017, 2018];

// you will export this query because when you create the mutation,
// you can refetch this query when doing mutations like add to portfolio
export const SECURITIES_QUERY = gql`
  query Securities($filter: SecurityFilterInput, $offset: Int, $limit: Int) {
    securities(filter: $filter, offset: $offset, limit: $limit) @connection(key: "security", filter: ["filter"]) {
      id
      name      
      sector      
      calculatedCircular{
          Year
          Total
          Dividend
          Balance
          Growth
          Value
      }
      isInLocalPortfolio @client
    }

    allSectors {
      code
      name
    }
  }
`;

const SecuritySearch = () => {
  const [inputIsLoading, setInputIsLoading] = useState(false);
  const { securityFilterText, setSecurityFilterText } = useContext(AppContext);
  const { securityFilterYear, setSecurityFilterYear } = useContext(AppContext);
  const [securityFilterTextInput, setSecurityFilterTextInput] = useState(securityFilterText);
  const [securityFilterYearInput, setSecurityFilterYearInput] = useState(securityFilterYear);
  const [showCase, setShowCase] = useState([true, true, true, true, true]);//0: all values, 1: dividend, 2: balance, 3: growth, 4: value
  const [currentYear, setCurrentYear] = useState(years[years.length - 1]);
  
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

  //get check states from CustomDropDownList
  const getCustomDropDownState = (index, check_states) => {    
    let cases = [];
    for(let i = 0; i < check_states.length; i++){
      if(check_states[i].value){
        cases.push(true)
      }else{
        cases.push(false)
      }
    }
    
    setShowCase(cases);
  }

  //get current year of slider
  const handleChangeYear = year => {
    setCurrentYear(year)
    // curYearRef.current = curYear;
    // console.log(curYearRef.current, 'slided year')
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
          <h3 className="subtitle is-6 has-text-centered" style={{ height: '20px', color: '#a9a9a9' }}>
            All stocks show an average rating score based on Dividend, Balance, Growth and Value.
          </h3>
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
        {({ loading, error, data: { securities, allSectors }, fetchMore }) => {
          if (error) return <ErrorMessage message="Error loading posts." />;
          if (loading)
            return (
              <div className="columns is-mobile" style={{ justifyContent: 'center' }}>
                <FontAwesomeIcon icon="spinner" spin />
              </div>
            );
        
          let itemsSector = [{id: 0, label: "All Values", value: false}];
          for(let i = 0; i < allSectors.length; i++){
            itemsSector.push({
              id: i + 1,
              label: allSectors[i].name,
              value: false
            });
          }
          //const areMoreSecurities = allSecurities.length < _allSecuritiesMeta.count;
          
          const areMoreSecurities = securities.length < 3600;
          return (
            <section style={{ paddingTop: '20px' }}>
              <div
                className="columns is-mobile"
                style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around' }}
              >{}
                <div className="column" style={{ paddingTop: '25px' }}>
                  <CustomDropdown key={0} title="Large caps" items={items} idx={0} hasSlider={false} getCustomDropDownState={getCustomDropDownState}/>
                </div>
                <div className="column" style={{ paddingTop: '25px' }}>
                  <CustomDropdown key={1} title="All values" items={items} idx={1} hasSlider={false} getCustomDropDownState={getCustomDropDownState}/>
                </div>
                <div className="column" style={{ paddingTop: '25px' }}>
                  <CustomDropdown key={2} title="All areas" items={items} idx={2} hasSlider={true} getCustomDropDownState={getCustomDropDownState}/>
                </div>
                <div className="column" style={{ paddingTop: '25px' }}>
                  <CustomDropdown key={3} title="All sectors" items={itemsSector} idx={3} hasSlider={false} getCustomDropDownState={getCustomDropDownState}/>
                </div>

                <div className="column">
                  <SingleSlider                    
                    onChangeYear={handleChangeYear}
                    width={270}
                    height={70}
                    years={years}
                  />
                </div>
              </div>
              <div
                className="columns is-mobile"
                style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around' }}
              >                
                {securities.map((s, k) => (
                    <LocalPortfolio key={s.id} index={s.id} security={s} showGraphCase={showCase} year={currentYear}/>
                ))}
              </div>
              {areMoreSecurities ? (
                <button className="button" onClick={() => loadMoreSecurities(securities, fetchMore)} style={{ backgroundColor: '#b9b9b9', color: 'white' }}>
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
