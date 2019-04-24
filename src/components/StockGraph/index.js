import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import StockChart from './StockChart';

class StockGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    
    if(this.isEmpty(data)){
      this.state = {
        is_empty : true
      };
    }else{
      this.state = {
        data: this.preCorrection(data).reverse(),
        width: parentWidth > 400 ? 400 : Math.max(parentWidth, 250),
        height: Math.max(parentHeight, 400),
        ptwidth: parentWidth,
        is_empty : false
      };
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    if(this.isEmpty(data)){
      this.setState({
        is_empty : true
      });
    }else{
      this.setState({
        data: this.preCorrection(data).reverse(),
        width: parentWidth > 400 ? 400 : Math.max(parentWidth, 250),
        height: Math.max(parentHeight, 400),
        ptwidth: parentWidth,
        is_empty : false
      });
    }
  }
  isEmpty(data){
    return !data || data.length == 0 ? true : false;
  }
  preCorrection(data){
    return data.map(d => {
      d.ConsolidatedNetIncome = d.ConsolidatedNetIncome ? d.ConsolidatedNetIncome : 0;
      d.ConsolidatedNetIncomeEUR = d.ConsolidatedNetIncomeEUR ? d.ConsolidatedNetIncomeEUR : 0;
      d.Currency = d.Currency ? d.Currency : '';
      d.Date = d.Date ? d.Date : '';
      d.DividendPayoutRatio = d.DividendPayoutRatio ? d.DividendPayoutRatio : 0;
      d.RateEUR = d.RateEUR ? d.RateEUR : 0;
      d.RetainedEarningsEUR = d.RetainedEarningsEUR ? d.RetainedEarningsEUR : 0;
      return d;
    });
  }
  render() {
    if (this.state.is_empty) {
      return <Fragment>No data</Fragment>;
    } else {
      return (
        <Fragment>
          <StockChart data={this.state.data} width={this.state.width} height={this.state.height} ptwidth={this.state.ptwidth} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(StockGraph);
