import React, { Component } from 'react';

import LayoutBasic from '../components/LayoutBasic';
import GaugeGraph from '../components/GaugeGraph';

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
          security(id: "xgfr4") {
            id
            name
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
        }`
      })
    })
      .then(r => r.json())
      .then(function(r){console.log(r.data.security); return [r.data.security]});

    return { userAgent, data };
  }
  render() {
    const { session, navMenu, data } = this.props;
    console.log(data[0].calculated);
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
          <GaugeGraph data={data[0].calculated} />
        </div>
      </LayoutBasic>
    );
  }
}
export default Index;
