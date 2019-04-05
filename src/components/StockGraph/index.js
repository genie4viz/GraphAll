import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';

import StockChart from './StockChart';

class StockGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    console.log(data, 'from index');
    this.state = {
      data: data,
      width: parentWidth > 600 ? 600 : Math.max(parentWidth, 400),
      height: Math.max(parentHeight, 400)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    this.setState({
      data: data,
      width: parentWidth > 600 ? 600 : Math.max(parentWidth, 400),
      height: Math.max(parentHeight, 400)
    });
  }

  render() {
    if (this.state.data.length == 0) {
      return <Fragment>No data</Fragment>;
    } else {
      return (
        <Fragment>
          <StockChart data={this.state.data} width={this.state.width} height={this.state.height} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(StockGraph);
