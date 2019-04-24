import React, { Component } from 'react';
import Link from 'next/link';

import LayoutBasic from '../components/LayoutBasic';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
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
          allSecurities(marketSize:LARGE, countryCode:"NL", etf: false){
            id
            name
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
      data: { allSecurities }
    } = this.props;

    return (
      <LayoutBasic
        {...this.props}
        title={'VEB - Overview'}
        description={'Overview'}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="content">
          <ul>
            {allSecurities.map(s => (
              <li>
                <Link key={s.id} href={`/security?id=${s.id}`} as={`/security/${s.id}`}>
                  <a>{s.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/stockpage">
              <a>New Page</a>
            </Link>
          </p>
          <p>
            <Link href="/horizon">
              <a>Horizon graph</a>
            </Link>
          </p>
          <p>
            <Link href="/circular">
              <a>Circular graph</a>
            </Link>
          </p>
          <p>
            <Link href="/stock">
              <a>Stock graph</a>
            </Link>
          </p>
          <p>
            <Link href="/gauge">
              <a>Gauge graph</a>
            </Link>
          </p>
          <p>
            <Link href="/negative">
              <a>Negative graph</a>
            </Link>
          </p>
          <p>
            <Link href="/balance">
              <a>Balance graph</a>
            </Link>
          </p>
          <p>
            <Link href="/area">
              <a>Area graph</a>
            </Link>
          </p>
        </div>
      </LayoutBasic>
    );
  }
}
export default Index;
