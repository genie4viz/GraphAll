import React, { Component } from 'react';

import fetch from 'isomorphic-unfetch';

import HorizonChart from '../components/HorizonChart';

import LayoutBasic from '../components/LayoutBasic';

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
            longBusinessDescription
            ticker
            globalQuotes {
              date
              close
            }
            top5IndustryHistory {
              security {
                id
                name
                ticker
                globalQuotes {
                  date
                  close
                }
              }
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
    const { session, navMenu, data } = this.props;

    const { security } = data;
    console.log(data);

    return (
      <LayoutBasic
        {...this.props}
        title={`VEB - ${security.name}`}
        description={security.name}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="content">
          <h2>
            Key figures {security.name} ({security.ticker})
          </h2>
          <p>{security.longBusinessDescription}</p>
        </div>
        <HorizonChart data={[security, ...security.top5IndustryHistory.map(t => t.security)]} />
      </LayoutBasic>
    );
  }
}
export default Index;
