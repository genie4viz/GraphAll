import React, { Component, Fragment } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import * as d3 from 'd3';
import GaugeChart from './GaugeChart';

const dataRange = [
  { title: 'PE-ratio', min: 0, max: 40, direction: 0 },
  { title: 'ROIC', min: 0, max: 0.5, direction: 1 },
  { title: 'Return on equity', min: 0, max: 0.5, direction: 1 },
  { title: 'Revenue Growth', min: -30, max: 60, direction: 1 },
  { title: 'Debt-ratio', min: 0, max: 4, direction: 0 },
  { title: 'N.t.b', min: -3, max: 3, direction: 1 }
];

class GaugeGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data , kind} = this.props;
    
    var tempwidth;
    
    if(parentWidth>210)
        tempwidth=210;
    if(parentWidth>250)
        tempwidth=250;
    if(parentWidth>350)
        tempwidth=300;

    
    this.state = {
      data: data,      
      kind: kind,
      ptwidth: parentWidth,
      width: tempwidth,
      height: tempwidth * 0.8
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data, kind } = nextProps;
    
    var tempwidth;
    if(parentWidth>210)
        tempwidth=210;
    if(parentWidth>250)
        tempwidth=250;
    if(parentWidth>350)
        tempwidth=300;
   
    this.setState({
      data: data,      
      kind: kind,
      ptwidth: parentWidth,
      width: tempwidth,
      height: tempwidth * 0.8
    });
  }

  render() {
    if (!this.state.data) {
      return <Fragment>No Data</Fragment>;
    } else {
      const { data, kind, ptwidth, width, height } = this.state;
      
      return (
        <Fragment>
          <GaugeChart            
            data={data}
            dataRange={dataRange[kind]}
            kind={kind}
            ptwidth={ptwidth}
            width={width}
            height={height}
          />            
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(GaugeGraph);
