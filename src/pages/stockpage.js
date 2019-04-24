import React, { Component } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';
import CircularGraph from '../components/CircularGraph';
import RoundGraph from '../components/RoundGraph';
import LayoutBasic from '../components/LayoutBasic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
class StockPage extends Component {
  static async getInitialProps({ req, query }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    // get some data from graphql endpoint
    const data = await fetch('https://vde-app4.app.veb.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        operationName: null,
        variables: {},
        query: `
        {
          security(id: "bjo5t") {
            id
            name
            longBusinessDescription
            ticker
            globalQuotes {
              date
              close
            }
            calculated {
              PERatioCompany
              PERatioBranche
              PERatioMarket
              ROICCompany
              ROICBranche
              ROICMarket
              ROECompany
              ROEBranche
              ROEMarket
              RevenueGrowthCompany
              RevenueGrowthBranche
              RevenueGrowthMarket
              DebtRatioCompany
              DebtRatioBranche
              DebtRatioMarket
              NettDEBTEBITDACompany
              NettDEBTEBITDABranche
              NettDEBTEBITDAMarket
            }

          }
        }
        `
      })
    })
      .then(r => r.json())
      .then(r => r.data);

    return { userAgent, data };
  }
  render() {
    const {
      session,
      navMenu,
      data: { security }
    } = this.props;

    return (
      <LayoutBasic
        {...this.props}
        title={`VEB - ${security.name}`}
        description={'Stocks'}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="columns is-mobile" style={{ justifyContent: 'center' }}>
          <div className="column is-three-quarters-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd" style={{display:'flex',justifyContent: 'center'}}>
            <p className="control has-icons-left" style={{ width: 'inherit', paddingRight:'inherit' }}>
              <input className="input" type="text" placeholder="Search a specific stock... " />
              <span className="icon is-small is-left">
              

              <i class="fas fa-clock"></i>

              </span>
            </p>
            <button className="button" style={{ backgroundColor: '#b9b9b9', color:'white', fontStyle:'italic' }}>Use VEB-filter</button>
          </div>
        
        </div>
        <div>
    <FontAwesomeIcon icon="check-square" />
</div>
   
        <div className="columns is-mobile">
          <div className="column">
            <h3 class="subtitle is-6 has-text-centered" style={{ height: '10px', color:'#a9a9a9' }}>
              All stocks show an average rating score based on Dividend, Balance, Growth and Value
            </h3>
          </div>
        </div>
        <div className="column is-mobile is-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
          <div class="box  has-text-grey">
            <h4 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Apple
            </h4>
            <hr />
            <div className="content">
              <RoundGraph key={0} index={0} security={securityTemp} />
            </div>
          </div>
          <div class="box  has-text-grey">
            <h4 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Apple
            </h4>
            <hr />
            <div className="content">
              <RoundGraph key={1} index={1} security={securityTemp} />
            </div>
          </div>
          <div class="box  has-text-grey">
            <h4 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Apple
            </h4>
            <hr />
            <div className="content">
              <RoundGraph key={2} index={2} security={securityTemp} />
            </div>
          </div>
          <div class="box  has-text-grey">
            <h4 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Apple
            </h4>
            <hr />
            <div className="content">
              <CircularGraph security={securityTemp} />
            </div>
          </div>
        </div>
      </LayoutBasic>
    );
  }
}
export default StockPage;
