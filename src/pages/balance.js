import React, { Component } from 'react';

import LayoutBasic from '../components/LayoutBasic';
import BalanceGraph from '../components/BalanceGraph';

class Index extends Component {
  static async getInitialProps({ req }) {
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
            last5AnnualTotals {
              Date
              TotalLiabilitiesStockholdersEquity
              TotalEquity
              TotalLiabilities
              TotalCash
              NonCurrentAssetsNoGoodwill
              CurrentAssetsNoCash
              Goodwill
            } 
          }
        }`
      })
    })
      .then(r => r.json())
      .then(r => [r.data.security]);

    return { userAgent, data };
  }
  render() {
    const { session, navMenu, data } = this.props;    
    
    return (
      <LayoutBasic
        {...this.props}
        title={'VEB - The Coca-Cola Company'}
        description={'The Coca-Cola Company'}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="content">
          <h2>Key figures Coca-Cola (NYSE:KO)</h2>
          <p>The Coca-Cola Company is an American ....</p>
          <BalanceGraph data={data[0].last5AnnualTotals}/>
        </div>
      </LayoutBasic>
    );
  }
}
export default Index;
