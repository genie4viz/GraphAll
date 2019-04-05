import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import * as d3 from 'd3';
import GaugeChart from './GaugeChart';

const dataRange = [
  { title: 'PE-ratio', min: 0, max: 40, direction: 0 },
  { title: 'ROIC', min: 0, max: 0.5, direction: 1 },
  { title: 'Return on equity', min: 0, max: 0.5, direction: 1 },
  { title: 'Revenue Growth', min: -30, max: 60, direction: 1 },
  { title: 'N.t.b', min: 0, max: 4, direction: 0 },
  { title: 'N.t.b', min: 0, max: 4, direction: 1 }
];

class GaugeGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data } = this.props;
    this.state = {
      data: data,
      dataRange: dataRange,
      width: 350,
      height: 300
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data } = nextProps;
    this.setState({
      data: data,
      dataRange: dataRange,
      width: 350,
      height: 300
    });
  }

  render() {
    if (this.state.data.length == 0) {
      return <Fragment>No Data</Fragment>;
    } else {
      const { data } = this.state;

      let jarr = [],
        tarr = [],
        i = 1;
      JSON.parse(JSON.stringify(data), (key, value) => {
        jarr.push({
          label: key,
          value: value
        });
        if (i % 3 == 0) {
          tarr.push(jarr);
          jarr = [];
        }
        i++;
      });
      return (
        <Fragment>
          {tarr.map((d, i) => {
            return (
              <GaugeChart
                key={i}
                data={d}
                dataRange={dataRange[i]}
                width={this.state.width}
                height={this.state.height}
              />
            );
          })}
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(GaugeGraph);
