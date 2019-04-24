import React, { Component, Fragment } from 'react';
import * as d3 from 'd3';
import ResponsiveWrapper from './ResponsiveWrapper';
import AreaChart from './AreaChart';

class AreaGraph extends Component {
  constructor(props) {
    super(props);
    const { parentWidth, parentHeight, data, companyName } = this.props;
    if(this.isEmpty(data)){
      this.state = {
        is_empty : true
      };
    }else{
      this.state = {
        width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
        height: 400,
        data: this.preCorrection(data),
        companyName: companyName,
        column: this.getColumn(data),
        is_empty : false
      };      
    }
    
  }
  componentWillReceiveProps(nextProps) {
    const { parentWidth, parentHeight, data, companyName } = nextProps;
    if(this.isEmpty(data)){
      this.setState({
        is_empty : true
      });
    }else{      
      this.setState({
        width: parentWidth > 1100 ? 1100 : Math.max(parentWidth, 300),
        height: 400,
        data: this.preCorrection(data),
        companyName: companyName,
        column: this.getColumn(data),
        is_empty : false
      });
    }
  }
  getColumn(data) {
    let column = [];
    for (var key in data[0]) {
      column.push(key);
    }
    return column;
  }
  isEmpty(data){
    return !data || data.length == 0 ? true : false;
  }
  preCorrection(data){
    return data.map(d => {
      d.Date = d.Date ? d.Date : '';
      d.Volume = d.Volume ? d.Volume : 0;
      d.Close = d.Close ? d.Close : 0;
      return d;
    });
  }
  render() {
    if (this.state.is_empty) {
      return <Fragment>No data</Fragment>;
    } else {
      return (
        <Fragment>
          <AreaChart companyName={this.state.companyName} data={this.state.data} column={this.state.column} width={this.state.width} height={this.state.height} />
        </Fragment>
      );
    }
  }
}

export default ResponsiveWrapper(AreaGraph);
