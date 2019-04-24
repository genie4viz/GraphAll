import React, { Component } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

import LayoutBasic from '../components/LayoutBasic';
import GaugeGraph from '../components/GaugeGraph';
import SecurityCard from '../components/SecurityCard';
import CircularGraph from '../components/CircularGraph';
import AreaGraph from '../components/AreaGraph';
import HorizonGraph from '../components/HorizonGraph';
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

class Second extends Component {
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
            calculated3Y{
              SalesOrRevenueLY
              SalesOrRevenueLYMin1
              SalesOrRevenueLYMin2
              GrossIncomeLY
              GrossIncomeLYMin1
              GrossIncomeLYMin2
              OperatingIncomeLY
              OperatingIncomeLYMin1
              OperatingIncomeLYMin2
              ConsolidatedNetIncomeLY
              ConsolidatedNetIncomeLYMin1
              ConsolidatedNetIncomeLYMin2             
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
  getGaugeArray(data) {
    if (data) {
      const gaugedata = d3.entries(data);
      let arr = [],
        datas = [];
      for (let i = 0; i < gaugedata.length; i += 3) {
        arr = [];
        gaugedata[i] = gaugedata[i] ? gaugedata[i] : 0;
        gaugedata[i + 1] = gaugedata[i + 1] ? gaugedata[i + 1] : 0;
        gaugedata[i + 2] = gaugedata[i + 2] ? gaugedata[i + 2] : 0;
        arr.push(gaugedata[i]);
        arr.push(gaugedata[i + 1]);
        arr.push(gaugedata[i + 2]);
        datas.push(arr);
      }
      return datas;
    } else {
      return null;
    }
  }
  render() {
    const {
      session,
      navMenu,
      data: { security }
    } = this.props;

    console.log(security, 'from security.js');

    let gauges = this.getGaugeArray(security.calculated);

    return (
      <LayoutBasic
        {...this.props}
        title={`VEB - ${security.name}`}
        description={"Stocks"}
        session={session}
        navMenu={true}
        signinBtn={true}
      >
        <div className="columns" class="has-background-white-ter">
          <div class="box has-text-grey">
            <div className="columns is-mobile">
              <div className="column is-one-third-mobile is-one-fifth-tablet is-one-fifth-desktop is-2-widescreen is-2-fullhd">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column is-two-thirds-mobile is-four-fifths-tablet is-four-fifths-desktop is-10-widescreen is-10-fullhd">
                <div className="content">
                  <h3
                    class="subtitle is-5 has-text-weight-bold has-text-grey"
                    style={{ height: '10px' }}
                  >{`Key figures ${security.name} (${security.ticker})`}</h3>

                  <hr />
                </div>

                <div className="columns is-desktop">
                  <div className="column is-full-mobile is-full-tablet is-half-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                    <div className="content" style={{ height: '360px', overflowY: 'scroll' }}>
                      <button className="button is-danger">+ Add to portfolio</button>
                      <p style={{ paddingTop: '10px' }}>{security.longBusinessDescription}</p>
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
                  <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
                    <CircularGraph security={securityTemp} />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-2">
                    <div className="columns">
                      <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                        Price
                      </h3>
                    </div>
                    <div className="columns" style={{ height: '50px' }}>
                      <h3 class="subtitle is-3 has-text-weight-bold has-text-grey">$44</h3>
                    </div>
                  </div>
                  <div className="column is-2">
                    <div className="columns">
                      <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                        &nbsp;Branche
                      </h3>
                    </div>
                    <div className="columns" style={{ height: '50px', fontSize: 'small' }}>
                      <div className="column is-3" style={{ padding: 'inherit' }}>
                        <img src="../static/svg/ConsumerNonDurables.svg" style={{ height: '34'}}/>
                      </div>
                      <div className="column is-9" style={{ padding: 'inherit' }}>
                        consumer <br />
                        Non Durables
                      </div>
                    </div>
                  </div>

                  <div className="column is-3">
                    <div className="columns">
                      <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                        Revenue
                      </h3>
                    </div>
                    <div className="columns" style={{ height: '50px' }}>
                      <h3 class="subtitle is-3 has-text-weight-bold has-text-grey">$35.41B</h3>
                    </div>
                  </div>

                  <div className="column is-3">
                    <div className="columns">
                      <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                        Market cap
                      </h3>
                    </div>
                    <div className="columns" style={{ height: '50px' }}>
                      <h3 class="subtitle is-3 has-text-weight-bold has-text-grey">$187.19B</h3>
                    </div>
                  </div>
                  <div className="column is-2">
                    <div className="columns">
                      <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                        Founded
                      </h3>
                    </div>
                    <div className="columns" style={{ height: '50px' }}>
                      <h3 class="subtitle is-3 has-text-weight-bold has-text-grey">1892</h3>
                    </div>
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
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Time</td>
                    <td>10:57</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>27,91</td>
                  </tr>
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Difference</td>
                    <td>0,33</td>
                  </tr>
                  <tr>
                    <td>Difference (%)</td>
                    <td>1,20</td>
                  </tr>
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Previous opening price</td>
                    <td style={{ verticalAlign: 'middle' }}>27,75</td>
                  </tr>
                  <tr>
                    <td>Previous closing price</td>
                    <td style={{ verticalAlign: 'middle' }}>27,58</td>
                  </tr>
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Lowest price</td>
                    <td>27,75</td>
                  </tr>
                  <tr>
                    <td>Highest price</td>
                    <td style={{ verticalAlign: 'middle' }}>27,92</td>
                  </tr>
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Volume</td>
                    <td>678.322</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>EUR</td>
                  </tr>
                  <tr style={{ backgroundColor: 'gainsboro' }}>
                    <td>Market</td>
                    <td>XAMS</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-8">
              <AreaGraph data={security.historyPrice100} companyName={security.name} />
            </div>
          </div>
        </div>
        <div class="box  has-text-grey">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Historic performance
          </h3>
          
        </div>
        <div class="box  has-text-grey is-mobile">
          <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
            Price basics {security.name}
          </h3>
          <hr />
          <div class="columns is-desktop">
            <div class="column">
              <div class="columns">
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[0]} kind="0" /> : <p>No Data</p>}</div>
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[1]} kind="1" /> : <p>No Data</p>}</div>
              </div>
            </div>
            <div class="column">
              <div class="columns">
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[2]} kind="2" /> : <p>No Data</p>}</div>
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[3]} kind="3" /> : <p>No Data</p>}</div>
              </div>
            </div>
          </div>
          <div class="columns is-desktop">
            <div class="column">
              <div class="columns">
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[4]} kind="4" /> : <p>No Data</p>}</div>
                <div class="column is-6">{gauges ? <GaugeGraph data={gauges[5]} kind="5" /> : <p>No Data</p>}</div>
              </div>
            </div>
            <div class="column">
              <div className="content">
                <p>
                  <span className="200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, consequuntur dolor
                    dolorum eveniet ipsum molestiae nobis nostrum nulla numquam optio pariatur quae quisquam reiciendis
                    tempore velit voluptas. Aliquid, ullam.
                  </span>
                </p>
                <p>
                  <span className="150">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto aspernatur at
                    dolores, mollitia necessitatibus numquam officiis perspiciatis quasi repellat sequi, tempore
                    tenetur? At consectetur deserunt dolorum error ipsam!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-mobile is-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
            <div class="box  has-text-grey">
              <h3 class="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
                Profit distribution
              </h3>
              <hr />
              <div className="columns">
                <div className="column is-6">
                  <div className="content">
                    <p style={{ fontStyle: 'italic' }}>In millions &euro;</p>
                    <table style={{ verticalAlign: 'middle' }}>
                      <tbody>
                        <tr>
                          <td />
                          <td>
                            <strong>2016</strong>
                          </td>
                          <td>
                            <strong>2017</strong>
                          </td>
                          <td>
                            <strong>2018</strong>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: 'gainsboro' }}>
                          <td>
                            <strong>Revenue</strong>
                          </td>
                          <td>
                            {security.calculated3Y && security.calculated3Y.SalesOrRevenueLYMin2
                              ? security.calculated3Y.SalesOrRevenueLYMin2.toFixed(0)
                              : 0}
                          </td>
                          <td>
                            {security.calculated3Y && security.calculated3Y.SalesOrRevenueLYMin1
                              ? security.calculated3Y.SalesOrRevenueLYMin1.toFixed(0)
                              : 0}
                          </td>
                          <td>
                            {security.calculated3Y && security.calculated3Y.SalesOrRevenueLY
                              ? security.calculated3Y.SalesOrRevenueLY.toFixed(0)
                              : 0}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Gross profit</strong>
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.GrossIncomeLYMin2
                              ? security.calculated3Y.GrossIncomeLYMin2.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.GrossIncomeLYMin1
                              ? security.calculated3Y.GrossIncomeLYMin1.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.GrossIncomeLY
                              ? security.calculated3Y.GrossIncomeLY.toFixed(0)
                              : 0}
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: 'gainsboro' }}>
                          <td>
                            <strong>Operating income</strong>
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.OperatingIncomeLYMin2
                              ? security.calculated3Y.OperatingIncomeLYMin2.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.OperatingIncomeLYMin1
                              ? security.calculated3Y.OperatingIncomeLYMin1.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.OperatingIncomeLY
                              ? security.calculated3Y.OperatingIncomeLY.toFixed(0)
                              : 0}
                          </td>
                        </tr>
                        <tr class="has-text-weight-bold">
                          <td>
                            <strong>Net income</strong>
                            <strong class="has-text-danger">*</strong>
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.ConsolidatedNetIncomeLYMin2
                              ? security.calculated3Y.ConsolidatedNetIncomeLYMin2.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.ConsolidatedNetIncomeLYMin1
                              ? security.calculated3Y.ConsolidatedNetIncomeLYMin1.toFixed(0)
                              : 0}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {security.calculated3Y && security.calculated3Y.ConsolidatedNetIncomeLY
                              ? security.calculated3Y.ConsolidatedNetIncomeLY.toFixed(0)
                              : 0}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="column is-6">
                  <StockGraph data={security.last3YearsDividend} />
                </div>
              </div>
            </div>
          </div>
          <div className="column is-mobile is-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
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
              <span style={{ color: 'red', fontWeight: '600', fontSize: '15pt' }}>|&nbsp;</span>
              <span>EBITDA</span>
            </div>
            <div className="column is-2">
              <span style={{ color: 'LimeGreen', fontWeight: '600', fontSize: '15pt' }}>●&nbsp;</span>
              <span>Cashflow from Operating activities</span>
            </div>
            <div className="column is-2">
              <span style={{ color: 'DarkGreen', fontWeight: '600', fontSize: '15pt' }}>●&nbsp;</span>
              <span>Cashflow from Investing activites</span>
            </div>
            <div className="column is-2">
              <span style={{ color: 'grey', fontWeight: '600', fontSize: '15pt' }}>●&nbsp;</span>
              <span>Cashflow from Financing activites</span>
            </div>
            <div className="column is-2">
              <span style={{ color: 'black', fontWeight: '600', fontSize: '15pt' }}>●&nbsp;</span>
              <span>Change in Cash</span>
            </div>
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
export default Second;
