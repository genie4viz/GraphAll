import React, { Component } from 'react';

import LayoutBasic from '../components/LayoutBasic';
import SecurityCard from '../components/SecurityCard';


const security = {
  b: 70,
  currency: 'EUR',
  d: 4,
  g: 3,
  id: 'etozx',
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

class Index extends Component {
  render() {
    const { session, navMenu } = this.props;

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
          <SecurityCard security={security}/>
        </div>
      </LayoutBasic>
    );
  }
}
export default Index;
