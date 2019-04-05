import React, { Component } from 'react';

import LayoutBasic from '../components/LayoutBasic';
import NegativeGraph from '../components/NegativeGraph';



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
            calculated5Y {
              LY
              SalesOrRevenueLY
              SalesOrRevenueLYMin1
              SalesOrRevenueLYMin2
              DividendPayOutLY
              DividendPayOutLYMin1
              DividendPayOutLYMin2
              NetoperatingCashFlowLY
              NetoperatingCashFlowLYMin1
              NetoperatingCashFlowLYMin2
              NetoperatingCashFlowLYMin3
              NetoperatingCashFlowLYMin4
              NetFinancingCashFlowLY
              NetFinancingCashFlowLYMin1
              NetFinancingCashFlowLYMin2
              NetFinancingCashFlowLYMin3
              NetFinancingCashFlowLYMin4
              NetchangeInCashLY
              NetchangeInCashLYMin1
              NetchangeInCashLYMin2
              NetchangeInCashLYMin3
              NetchangeInCashLYMin4
              NetInvestingCashFlowLY
              NetInvestingCashFlowLYMin1
              NetInvestingCashFlowLYMin2
              NetInvestingCashFlowLYMin3
              NetInvestingCashFlowLYMin4
              EbitdaLY
              EbitdaLYMin1
              EbitdaLYMin2
              EbitdaLYMin3
              EbitdaLYMin4
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
          <NegativeGraph data={data[0].calculated5Y}  />
        </div>
      </LayoutBasic>
    );
  }
}
export default Index;
