import React, { Component, Fragment } from 'react';
import * as d3 from 'd3';
import ResponsiveWrapper from './ResponsiveWrapper';
import AreaChart from './AreaChart';

class AreaGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    data.columns = this.getColumns(data);
    this.state = {
      width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
      height: 400,
      data: data
    };
  }
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    data.columns = this.getColumns(data);
    this.setState({
      width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
      height: 400,
      data: data
    });
  }
  getColumns(data) {
    let columns = [];
    for (var key in data[0]) {
      columns.push(key);
    }
    return columns;
  }

  render() {
    if (this.state.data.length == 0) {
      return <Fragment>No data</Fragment>;
    } else {
      return (
        <Fragment>
          <AreaChart data={this.state.data} width={this.state.width} height={this.state.height} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(AreaGraph);
