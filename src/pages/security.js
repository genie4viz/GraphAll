import React, { Component } from 'react';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

import LayoutBasic from '../components/LayoutBasic';
import GaugeGraph from '../components/GaugeGraph';
import SecurityCard from '../components/SecurityCard';
import CircularGraph from '../components/CircularGraph';
import AreaGraph from '../components/AreaGraph';
import HorizonChart from '../components/HorizonChart';
import StockGraph from '../components/StockGraph';
import NegativeGraph from '../components/NegativeGraph';
import BalanceGraph from '../components/BalanceGraph';

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

class Security extends Component {
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
          security(id: "${query.id}") {
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
            historyPrice100 {
              Date
              Volume
              Close
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
            globalQuotes {
              date
              close
            }
            last3YearsDividend {
              Date
              ConsolidatedNetIncome
              ConsolidatedNetIncomeEUR
              DividendPayoutRatio
              RetainedEarningsEUR
              Currency
              RateEUR
            }
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
        description={security.name}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="columns is-desktop" class="has-background-white-ter">
          <div class="box">
            <div className="columns">
              <div className="column is-2">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column is-10">
                <div className="content">
                  <h2>{`Key figures ${security.name} (${security.ticker})`}</h2>
                  <hr />
                </div>

                <div className="columns">
                  <div className="column is-7">
                    <div className="content" style={{ height: '455px', overflowY: 'scroll' }}>
                      <button className="button is-danger">+ Add to portfolio</button>
                      <p>{security.longBusinessDescription}</p>
                      <h3 className="has-text-danger">Important notes</h3>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda delectus, doloremque
                          eligendi hic suscipit!
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, provident?</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum id ipsam
                          provident soluta tenetur veniam vitae. Eos esse harum labore quisquam soluta tenetur velit?
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column is-5">
                    <CircularGraph security={securityTemp} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>&nbsp;</h3>
        <div class="box  has-text-grey">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Price
          </h3>
          <hr />
          <div className="columns">
            <div className="column is-4">
              <table className="table is-striped is-narrow is-hoverable is-fullwidth ">
                <tbody>
                  <tr>
                    <td>Date</td>
                    <td>5/2/2019</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>10:57</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>27,91</td>
                  </tr>
                  <tr>
                    <td>Difference</td>
                    <td>0,33</td>
                  </tr>
                  <tr>
                    <td>Difference (%)</td>
                    <td>1,20</td>
                  </tr>
                  <tr>
                    <td>Previous opening price</td>
                    <td>27,75</td>
                  </tr>
                  <tr>
                    <td>Previous closing price</td>
                    <td>27,58</td>
                  </tr>
                  <tr>
                    <td>Lowest price</td>
                    <td>27,75</td>
                  </tr>
                  <tr>
                    <td>Highest price</td>
                    <td>27,92</td>
                  </tr>
                  <tr>
                    <td>Volume</td>
                    <td>678.322</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>EUR</td>
                  </tr>
                  <tr>
                    <td>Market</td>
                    <td>XAMS</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-8">
              <AreaGraph data={security.historyPrice100} />
            </div>
          </div>
        </div>
        <div class="box  has-text-grey">
          <h3>Historic performance</h3>
          <hr />
          <HorizonChart data={[security, ...security.top5IndustryHistory.map(t => t.security)]} />
        </div>
        <div class="box  has-text-grey">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Price basics {security.name}
          </h3>
          <hr />
          <GaugeGraph data={security.calculated} />
          <div className="content">
            <p>
              <span className="200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, consequuntur dolor dolorum
                eveniet ipsum molestiae nobis nostrum nulla numquam optio pariatur quae quisquam reiciendis tempore
                velit voluptas. Aliquid, ullam.
              </span>
            </p>
            <p>
              <span className="150">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto aspernatur at
                dolores, mollitia necessitatibus numquam officiis perspiciatis quasi repellat sequi, tempore tenetur? At
                consectetur deserunt dolorum error ipsam!
              </span>
            </p>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-mobile is-tablet is-two-third-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
            <div class="box  has-text-grey">
              <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
                Profit distribution
              </h3>
              <hr />
              <div className="columns">
                <div className="column is-5">
                  <div className="content">
                    <p>In millions &euro;</p>
                    <table className="table is-striped">
                      <tbody>
                        <tr>
                          <td />
                          <td>
                            <strong>2018</strong>
                          </td>
                          <td>
                            <strong>2017</strong>
                          </td>
                          <td>
                            <strong>2016</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Revenue</strong>
                          </td>
                          <td>2,492</td>
                          <td>2,492</td>
                          <td>2,492</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Gross profit</strong>
                          </td>
                          <td>1,196</td>
                          <td>1,196</td>
                          <td>1,196</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Operating income</strong>
                          </td>
                          <td>333,1</td>
                          <td>315</td>
                          <td>243</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Net income</strong>
                          </td>
                          <td>267,9</td>
                          <td>267,9</td>
                          <td>267,9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="column is-7">
                  <StockGraph data={security.last3YearsDividend} />
                </div>
              </div>
            </div>
          </div>
          <div className="column is-mobile is-tablet is-one-thirds-desktop is-one-thirds-widescreen is-one-thirds-fullhd">
            <div class="box  has-text-grey">
              <h4 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
                Dividend
              </h4>
              <hr />
              <div className="content">
                <div className="columns is-mobile" style={{ height: '40px' }}>
                  <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">
                    <h4 className="subtitle is-3 has-text-weight-bold has-text-grey">3.25%</h4>
                  </div>
                  <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">
                    <h4 className="subtitle is-3 has-text-weight-bold has-text-grey">€2,25</h4>
                  </div>
                </div>
                <div className="columns is-mobile" style={{ height: '72px' }}>
                  <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">Dividend Rate</div>
                  <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">Dividend Price</div>
                </div>
                <div style={{ height: '255px', overflowY: 'scroll' }}>
                  <strong>Explanation</strong>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reiciendis, voluptates? Earum
                      ex, harum laudantium maxime molestias odio ratione ut! Dolore earum fugiat pariatur repudiandae
                      veritatis. Culpa debitis pariatur vel.50
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque expedita libero magnam minima
                      perspiciatis suscipit tempore? Ab atque iste optio!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi minima molestias
                      neque perspiciatis, quas?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box  has-text-grey">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Cashflow
          </h3>
          <hr />
          <div className="columns">
            <div className="column is-1" />
            <div className="column is-2">
              <span class="icon is-small is-right">
                <i class="fa fa-info-circle" />
              </span>
              <span class="fas fa-check" />
              EBITDA
            </div>
            <div className="column is-2">Cashflow from Operating activities</div>
            <div className="column is-2">Cashflow from Investing activites</div>
            <div className="column is-2">Cashflow from Financing activites</div>
            <div className="column is-2">Change in Cash</div>
            <div className="column is-1" />
          </div>
          <div className="columns">
            <div className="column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd">
              <NegativeGraph data={security.calculated5Y} />
            </div>
            <div className="column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd">
              <div className="content" style={{ height: '380px', overflowY: 'scroll' }}>
                <p>
                  <strong className="has-text-danger">Important!: </strong> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Animi at delectus dolor doloremque facilis iste non quam sapiente tempora totam! A
                  accusantium, aliquid architecto consequuntur dolore ducimus, esse est ex explicabo facilis fugit id
                  illum nisi nulla odio quidem quisquam, repellendus ut vel voluptatum! Assumenda dolorum eaque iste
                  neque! Dicta esse facere, laudantium, minus nam nihil non nostrum officia perspiciatis, praesentium
                  quos repudiandae. Aspernatur dolorum eum harum odio perspiciatis porro provident quasi recusandae
                  repellendus reprehenderit! Blanditiis cupiditate dolorum iusto repellat tenetur! Ab eaque et facere
                  maiores mollitia neque quod repellat reprehenderit similique? Ad aliquam autem beatae cupiditate
                  doloribus, dolorum eius ipsa laboriosam modi nulla odit, quasi temporibus unde! Ab cum dolore maxime
                  optio quae quo, suscipit totam! Beatae delectus deleniti doloremque eaque eius esse explicabo facere
                  harum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat
                  hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in
                  inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam
                  voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat
                  hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in
                  inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam
                  voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!
                </p>
                <strong>Explanation</strong>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="box  has-text-grey">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Balance
          </h3>

          <hr />
          <div className="columns">
            <div className="column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd">
              <BalanceGraph data={security.last5AnnualTotals} />
            </div>
            <div className="column is-mobile is-one-two-tablet is-one-two-desktop is-one-two-widescreen is-one-two-fullhd">
              <div className="content" style={{ height: '400px', overflowY: 'scroll' }}>
                <p>
                  <strong className="has-text-danger">Important!: </strong> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Animi at delectus dolor doloremque facilis iste non quam sapiente tempora totam! A
                  accusantium, aliquid architecto consequuntur dolore ducimus, esse est ex explicabo facilis fugit id
                  illum nisi nulla odio quidem quisquam, repellendus ut vel voluptatum! Assumenda dolorum eaque iste
                  neque! Dicta esse facere, laudantium, minus nam nihil non nostrum officia perspiciatis, praesentium
                  quos repudiandae. Aspernatur dolorum eum harum odio perspiciatis porro provident quasi recusandae
                  repellendus reprehenderit! Blanditiis cupiditate dolorum iusto repellat tenetur! Ab eaque et facere
                  maiores mollitia neque quod repellat reprehenderit similique? Ad aliquam autem beatae cupiditate
                  doloribus, dolorum eius ipsa laboriosam modi nulla odit, quasi temporibus unde! Ab cum dolore maxime
                  optio quae quo, suscipit totam! Beatae delectus deleniti doloremque eaque eius esse explicabo facere
                  harum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat
                  hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in
                  inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam
                  voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis delectus facere fugiat
                  hic mollitia neque nihil numquam praesentium suscipit! Ab amet atque cupiditate, eveniet hic in
                  inventore natus necessitatibus odio officia optio quae quidem quod recusandae sit tempore totam
                  voluptatum? Autem debitis ipsam iure non possimus sapiente temporibus unde!
                </p>
                <strong>Explanation</strong>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem eligendi, explicabo
                    impedit iure laboriosam magni modi neque nihil optio quasi sed sunt, voluptate voluptatibus!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </LayoutBasic>
    );
  }
}
export default Security;
