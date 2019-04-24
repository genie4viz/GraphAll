import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import BalanceChart from './BalanceChart';

class BalanceGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    if(this.isEmpty(data)){
      this.state = {
        is_empty : true
      };
    }else{
      this.state = {
        data: this.preCorrection(data),
        width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
        height: 400,
        is_empty: false
      };
    }
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    if(this.isEmpty(data)){
      this.setState({
        is_empty : true
      });
    }else{
      this.setState({
        data: this.preCorrection(data),
        width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
        height: 400,
        is_empty: false
      });
    }
  }
  isEmpty(data){
    return !data || data.length == 0 ? true : false;
  }
  preCorrection(data){
    return data.map(d => {
      d.CurrentAssetsNoCash = d.CurrentAssetsNoCash ? d.CurrentAssetsNoCash : 0;
      d.Goodwill = d.Goodwill ? d.Goodwill : 0;
      d.NonCurrentAssetsNoGoodwill = d.NonCurrentAssetsNoGoodwill ? d.NonCurrentAssetsNoGoodwill : 0;
      d.Date = d.Date ? d.Date : '';
      d.TotalCash = d.TotalCash ? d.TotalCash : 0;
      d.TotalEquity = d.TotalEquity ? d.TotalEquity : 0;
      d.TotalLiabilities = d.TotalLiabilities ? d.TotalLiabilities : 0;
      d.TotalLiabilitiesStockholdersEquity = d.TotalLiabilitiesStockholdersEquity ? d.TotalLiabilitiesStockholdersEquity : 0;
      return d;
    });
  }
  render() {
    if (this.state.is_empty) {
      return <Fragment>No Data</Fragment>;
    } else {
      return (
        <Fragment>
          <BalanceChart data={this.state.data} width={this.state.width} height={this.state.height} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(BalanceGraph);
