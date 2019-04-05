import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import BalanceChart from './BalanceChart';

class BalanceGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    this.state = {
      data: data,
      width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
      height: 400
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    this.setState({
      data: data,
      width: parentWidth > 650 ? 650 : Math.max(parentWidth, 500),
      height: 400
    });
  }

  render() {
    if (this.state.data.length == 0) {
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
