import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import NegativeChart from './NegativeChart';

class NegativeGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    this.state = {
      data: data,
      width: parentWidth > 850 ? 850 : Math.max(parentWidth, 450),
      height: 430
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    this.setState({
      data: data,
      width: parentWidth > 850 ? 850 : Math.max(parentWidth, 450),
      height: 430
    });
  }

  render() {
    if (this.state.data.length == 0) {
      <Fragment>No data</Fragment>;
    } else {
      const { data } = this.state;

      let cap_data = [
        {
          year: '2019',
          values: [
            { label: 'NetoperatingCashFlowLY', value: data.NetoperatingCashFlowLY },
            { label: 'NetInvestingCashFlowLY', value: data.NetInvestingCashFlowLYMin },
            { label: 'NetchangeInCashLY', value: data.NetchangeInCashLY },
            { label: 'NetFinancingCashFlowLY', value: data.NetFinancingCashFlowLY },
            { label: 'EbitdaLY', value: data.EbitdaLY }
          ]
        },
        {
          year: '2018',
          values: [
            { label: 'NetoperatingCashFlowLYMin1', value: data.NetoperatingCashFlowLYMin1 },
            { label: 'NetInvestingCashFlowLYMin1', value: data.NetInvestingCashFlowLYMin1 },
            { label: 'NetchangeInCashLYMin1', value: data.NetchangeInCashLYMin1 },
            { label: 'NetFinancingCashFlowLYMin1', value: data.NetFinancingCashFlowLYMin1 },
            { label: 'EbitdaLYMin1', value: data.EbitdaLYMin1 }
          ]
        },
        {
          year: '2017',
          values: [
            { label: 'NetoperatingCashFlowLYMin2', value: data.NetoperatingCashFlowLYMin2 },
            { label: 'NetInvestingCashFlowLYMin2', value: data.NetInvestingCashFlowLYMin2 },
            { label: 'NetchangeInCashLYMin2', value: data.NetchangeInCashLYMin2 },
            { label: 'NetFinancingCashFlowLYMin2', value: data.NetFinancingCashFlowLYMin2 },
            { label: 'EbitdaLYMin2', value: data.EbitdaLYMin2 }
          ]
        },
        {
          year: '2016',
          values: [
            { label: 'NetoperatingCashFlowLYMin3', value: data.NetoperatingCashFlowLYMin3 },
            { label: 'NetInvestingCashFlowLYMin3', value: data.NetInvestingCashFlowLYMin3 },
            { label: 'NetchangeInCashLYMin3', value: data.NetchangeInCashLYMin3 },
            { label: 'NetFinancingCashFlowLYMin3', value: data.NetFinancingCashFlowLYMin3 },
            { label: 'EbitdaLYMin3', value: data.EbitdaLYMin3 }
          ]
        },
        {
          year: '2015',
          values: [
            { label: 'NetoperatingCashFlowLYMin4', value: data.NetoperatingCashFlowLYMin4 },
            { label: 'NetInvestingCashFlowLYMin4', value: data.NetInvestingCashFlowLYMin4 },
            { label: 'NetchangeInCashLYMin4', value: data.NetchangeInCashLYMin4 },
            { label: 'NetFinancingCashFlowLYMin4', value: data.NetFinancingCashFlowLYMin4 },
            { label: 'EbitdaLYMin4', value: data.EbitdaLYMin4 }
          ]
        }
      ];

      return (
        <Fragment>
          <NegativeChart data={cap_data} width={this.state.width} height={this.state.height} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(NegativeGraph);
