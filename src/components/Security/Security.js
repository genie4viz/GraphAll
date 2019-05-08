import React, { Component } from 'react';
import * as d3 from 'd3';
import CircularGraph from '../CircularGraph';
import AreaGraph from '../AreaGraph';
import HorizonGraph from '../HorizonGraph';
import GaugeGraph from '../GaugeGraph';
import StockGraph from '../StockGraph';
import NegativeGraph from '../NegativeGraph';
import BalanceGraph from '../BalanceGraph';
import RoundGraph from '../RoundGraph';

import  { formatIntl, formatTime, formatDate, formatVolume } from '../../util/format-intl';

import { IntlProvider } from 'react-intl';

const showGraphCase = [true, true, true, true, true];

const Security = (props) => {

  const {toggleLocalPortfolio, security} = props;
  {console.log(security)};
  const getGaugeArray = (data) => {
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
  let gauges = getGaugeArray(security.calculated);
  return (
        <div>
          <div className="has-background-white-ter">
            <div className="box has-text-grey">
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
                      className="subtitle is-5 has-text-weight-bold has-text-grey"
                      style={{ height: '10px' }}
                    >{`Key figures ${security.name} (${security.ticker})`}</h3>

                    <hr />
                  </div>

                  <div className="columns is-desktop">
                    <div className="column is-full-mobile is-full-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                      <div className="content" style={{ height: '360px', overflowY: 'scroll' }}>
                        {security.isInLocalPortfolio ? (
                          <button className="button is-small is-danger" onClick={() => toggleLocalPortfolio()}>
                            - Add to portfolio
                          </button>
                        ) : (
                          <button className="button is-small" onClick={() => toggleLocalPortfolio()}>
                            + Remove from portfolio
                          </button>
                        )}

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
                    <div className="column is-full-mobile is-full-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <div className={'RoundGraph' + security.id} style={{ width: '230px', height: '230px'}}>
                            {security.calculatedCircular[0] != null
                            ? <RoundGraph key={security.id} index={security.id} params={security.calculatedCircular[security.calculatedCircular.length-1]} showGraphCase={showGraphCase}/> 
                            : <p>No data</p>}
                        </div>
                      </div>
                  </div>
                  <div className="columns">
                    <div className="column is-2">
                      <div className="columns">
                        <h3 className="subtitle is-6 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                          Price
                        </h3>
                      </div>
                      <div className="columns" style={{ height: '50px' }}>
                        <h3 className="subtitle is-4 has-text-weight-bold has-text-grey">{`${security.currency=='EUR'?'€':security.currency} ${
                          security.liveData.last
                        }`}</h3>
                      </div>
                    </div>
                    <div className="column is-3">
                      <div className="columns">
                        <h3 className="subtitle is-6 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                          &nbsp;Branche
                        </h3>
                      </div>
                      <div className="columns" style={{ height: '50px', fontSize: 'small' }}>
                        <div className="column is-2" style={{ padding: 'inherit' }}>
                          <img src={`../static/svg/${security.sector}.svg`} style={{ height: '34px' }} />
                        </div>
                        <div className="column is-10" style={{ padding: 'inherit' }}>
                          {security.sector}
                        </div>
                      </div>
                    </div>

                    <div className="column is-2">
                      <div className="columns">
                        <h3 className="subtitle is-6 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                          Revenue
                        </h3>
                      </div>
                      <div className="columns" style={{ height: '50px' }}>
                        <h3 className="subtitle is-4 has-text-weight-bold has-text-grey">$35.41B</h3>
                      </div>
                    </div>

                    <div className="column is-2">
                      <div className="columns">
                        <h3 className="subtitle is-6 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                          Market cap
                        </h3>
                      </div>
                      <div className="columns" style={{ height: '50px' }}>
                        <h3 className="subtitle is-4 has-text-weight-bold has-text-grey">{`${
                          security.factsetData.MarketCapitalization.toFixed(1)
                        }`}B</h3>
                      </div>
                    </div>
                    <div className="column is-3">
                      <div className="columns">
                        <h3 className="subtitle is-6 has-text-weight-bold has-text-grey" style={{ height: '25px' }}>
                          CEO
                        </h3>
                      </div>
                      <div className="columns" style={{ height: '50px' }}>
                        <h3 className="subtitle is-5 has-text-weight-bold has-text-grey">{security.factsetData.CEO}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>&nbsp;</h3>
          <div className="box  has-text-grey">
            <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Price
            </h3>
            <hr />
            <div className="columns">
              <div className="column is-4">
                <table className="table is-striped is-narrow is-hoverable is-fullwidth ">
                  <tbody>
                    <tr>
                      <td>Date</td>
                      <td><IntlProvider>{formatDate(security.liveData.dateTime)}</IntlProvider></td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Time</td>
                      <td><IntlProvider>{formatTime(security.liveData.dateTime)}</IntlProvider></td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{security.liveData.last}</td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Difference</td>
                      <td>{security.liveData.netChange}</td>
                    </tr>
                    <tr>
                      <td>Difference (%)</td>
                      <td>${security.liveData.changePercent}</td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Previous opening price</td>
                      <td style={{ verticalAlign: 'middle' }}>{security.liveData.previousOpen}</td>
                    </tr>
                    <tr>
                      <td>Previous closing price</td>
                      <td style={{ verticalAlign: 'middle' }}>27,58</td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Lowest price</td>
                      <td>{security.liveData.previousOpen}</td>
                    </tr>
                    <tr>
                      <td>Highest price</td>
                      <td style={{ verticalAlign: 'middle' }}>{security.liveData.previousDayLow}</td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Volume</td>
                      <td><IntlProvider>{formatVolume(security.liveData.previousDayHigh)}</IntlProvider></td>
                    </tr>
                    <tr>
                      <td>Currency</td>
                      <td>{`${security.currency=='EUR'?'€':security.currency}`}</td>
                    </tr>
                    <tr style={{ backgroundColor: 'gainsboro' }}>
                      <td>Market</td>
                      <td>{security.mic}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="column is-8">
                <AreaGraph data={security.historyPrice100} companyName={security.name} />
              </div>
            </div>
          </div>
          <div className="box  has-text-grey">
            <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Historic performance
            </h3>
            <hr />
            {security.globalQuotes ? (
              security.top5IndustryHistory ? (
                <HorizonGraph data={[security, ...security.top5IndustryHistory.map(t => t.security)]} />
              ) : (
                <p>No Data</p>
              )
            ) : (
              <p>No Data</p>
            )}
          </div>
          <div className="box  has-text-grey is-mobile">
            <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
              Price basics {security.name}
            </h3>
            <hr />
            <div className="columns is-desktop">
              <div className="column">
                <div className="columns">
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[0]} kind="0" /> : <p>No Data</p>}</div>
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[1]} kind="1" /> : <p>No Data</p>}</div>
                </div>
              </div>
              <div className="column">
                <div className="columns">
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[2]} kind="2" /> : <p>No Data</p>}</div>
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[3]} kind="3" /> : <p>No Data</p>}</div>
                </div>
              </div>
            </div>
            <div className="columns is-desktop">
              <div className="column">
                <div className="columns">
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[4]} kind="4" /> : <p>No Data</p>}</div>
                  <div className="column is-6">{gauges ? <GaugeGraph data={gauges[5]} kind="5" /> : <p>No Data</p>}</div>
                </div>
              </div>
              <div className="column">
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
              <div className="box  has-text-grey">
                <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
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
                          <tr className="has-text-weight-bold">
                            <td>
                              <strong>Net income</strong>
                              <strong className="has-text-danger">*</strong>
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
              <div className="box  has-text-grey">
                <h4 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
                  Dividend
                </h4>
                <hr />
                <div className="content">
                  <div className="columns is-mobile" style={{ height: '40px' }}>
                    <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">
                      <h4 className="subtitle is-3 has-text-weight-bold has-text-grey">
                        {security.last3YearsDividend[0] ? (
                          security.last3YearsDividend[0].DividendPayoutRatio ? (
                            security.last3YearsDividend[0].DividendPayoutRatio.toFixed(0) + '%'
                          ) : (
                            <p>No Data</p>
                          )
                        ) : (
                          <p>No Data</p>
                        )}
                      </h4>
                    </div>
                  </div>
                  <div className="columns is-mobile" style={{ height: '42px' }}>
                    <div className="column is-one-two-mobile is-one-two-tablet has-text-centered">Dividend Rate</div>
                  </div>
                  <div style={{ height: '285px', overflowY: 'scroll' }}>
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
          <div className="box  has-text-grey">
            <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
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
          <div className="box  has-text-grey">
            <h3 className="subtitle is-5 has-text-weight-bold has-text-grey" style={{ height: '10px' }}>
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
        </div>      
    );
}

export default Security;
