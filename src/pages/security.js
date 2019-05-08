import React, { Component } from 'react';

import LayoutBasic from '../components/LayoutBasic';
import Security from '../components/Security';

import gql from 'graphql-tag';

import { Query, Mutation } from 'react-apollo';

export const SECURITY_QUERY = gql`
  query GetSecurityDetails($id: String!) {
    security(id: $id) {
      id
      name
      longBusinessDescription
      ticker
      currency
      mic
      sector
      globalQuotes {
        date
        close
      }
      liveData {
        dateTime
        last
        netChange
        changePercent
        previousOpen
        previousClose
        previousDayLow
        previousDayHigh
        cumulativeVolume
      }
      factsetData {
        BookValue
        EarningsGrowth
        CEO
        MarketCapitalization
        CompanyFoundedDate
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
      calculated3Y {
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
      calculatedCircular{
        Year
        Total
        Dividend
        Balance
        Growth
        Value
      }
    }
  }
`;

class SecurityPage extends Component {
  static async getInitialProps({ req, query }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent, securityId: query.id };
  }
  render() {
    const { session, navMenu, securityId } = this.props;
    return (
      <Query query={SECURITY_QUERY} variables={{ id: securityId }}>
        {({ loading, error, data }) => {
          if (loading) return `Loading...`;
          if (error) return `Error! ${error}`;
          const security = data.security;
          return (
            <LayoutBasic
              {...this.props}
              title={`VEB - ${security.name}`}
              description={security.name}
              session={session}
              navMenu={true}
              signinBtn={true}
            >
            
              <Security security={security} toggleLocalPortfolio={() => {}} />
            </LayoutBasic>
          );
        }}
      </Query>
    );
  }
}

export default SecurityPage;
