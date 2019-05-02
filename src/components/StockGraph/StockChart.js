import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends React.Component {
  constructor(props) {
    super(props);
    const { svgDimen, top_margin, bottom_margin, data } = this.props;

    this.state = {
      svgDimen: svgDimen,
      top_margin: top_margin,
      bottom_margin: bottom_margin,      
      data: data
    };
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  componentWillReceiveProps(nextProps) {
    const { svgDimen, top_margin, bottom_margin, data } = nextProps;
    this.setState({
      svgDimen: svgDimen,
      top_margin: top_margin,
      bottom_margin: bottom_margin,      
      data: data
    });
  }
  renderAxis() {
    const {svgDimen, top_margin, bottom_margin, data} = this.state;

    let formatTime = d3.timeFormat('%Y'),
        max = d3.max(data.map(d => d.ConsolidatedNetIncome)),
        min = d3.min(data.map(d => d.ConsolidatedNetIncome)),        
        domain_min, domain_max, ext = 0.1, durate = 1000;
    
    
    if(min < 0 && max < 0){      
      domain_min = min + min * ext;
      domain_max = 0;
    }else if(min > 0 && max > 0){      
      domain_min = 0;
      domain_max = max + max * ext;
    }else if(min < 0 && max > 0){      
      domain_min = min + min * ext;
      domain_max = max + max * ext;
    }else if(min < 0 && max == 0){      
      domain_min = min + min * ext;
      domain_max = 0;
    }else if(min == 0 && max > 0){      
      domain_min = 0;
      domain_max = max + max * ext;
    }else{
      domain_min = 0;
      domain_max = 0;
    }

    let x = d3
          .scaleBand()
          .range([0, svgDimen.width - 50])
          .domain(data.map(d => formatTime(new Date(d.Date)))),
        y = d3
          .scaleLinear()
          .domain([domain_min, domain_max])
          .rangeRound([svgDimen.height - bottom_margin, top_margin]),
        xAxis = d3
          .axisBottom(x)
          .tickSize(0)
          .tickPadding(0),
        yAxis = d3
          .axisLeft(y)
          .tickSize(10)
          .ticks(10);

    d3.select(this.xAxisElement)
      .selectAll('*')
      .remove();
    d3.select(this.yAxisElement)
      .selectAll('*')
      .remove();
    d3.select(this.barArea)
      .selectAll('*')
      .remove();

    d3.select(this.xAxisElement)
      .attr('class', 'x axis')
      .attr('transform', "translate(40," + y(0) + ")")
      .attr('stroke-width', 2)
      .call(xAxis);

    d3.select(this.xAxisElement)
      .selectAll('text')
      .attr('transform', "translate(0," + (y(domain_min) - y(0)) + ")")
      .attr('alignment-baseline', 'hanging')  
      .attr('dy', '0.9em')    
      .style('font-size', '10pt');

    d3.select(this.yAxisElement)
      .attr('class', 'y axis')
      .attr('transform', 'translate(40, 0)')
      .attr('stroke-width', 1.5)
      .call(yAxis);

    let stock = d3.select(this.barArea)
      .attr('transform', "translate(40," + y(0) + ")");

    stock
      .append('g')
      .attr('class', 'group-grey')
      .selectAll('path-group-grey')
      .data(data)
      .enter()
      .append('path')
      .attr('fill','#a2a2a2')
      .attr('d', (d) => {
        let strPath = '', rsz = 5, b_w = 30,
            x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2;

        if(d.ConsolidatedNetIncome > 0){
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + (-rsz) +
                    'q0,' + (-rsz) + ',' + (-rsz) + ',' + (-rsz) +
                    'l' + (-(b_w - rsz * 2)) + ',0' +
                    'q' + (-rsz) + ',0,' + (-rsz) + ',' + rsz +
                    'l0,' + rsz +'Z';
        }else{          
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + rsz +
                    'q0,' + rsz + ',' + (-rsz) + ',' + rsz +
                    'l' + (-(b_w - rsz * 2)) + ',0' +
                    'q' + (-rsz) + ',0,' + (-rsz) + ',' + (-rsz) +
                    'l0,' + (-rsz) +'Z';
        }
        return strPath;
      });    
    
    stock
      .select('.group-grey')
      .selectAll('path')
      .transition().duration(durate)
      .attr('d', (d) => {
        let strPath = '', rsz = 5, b_w = 30,
            x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2,
            h = Math.abs(y(d.ConsolidatedNetIncome) - y(0));

        if(d.ConsolidatedNetIncome > 0){
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + (-(h - rsz)) +
                    'q0,' + (-rsz) + ',' + (-rsz) + ',' + (-rsz) +
                    'l' + (-(b_w - rsz * 2)) + ',0' +
                    'q' + (-rsz) + ',0,' + (-rsz) + ',' + rsz +
                    'l0,' + (h - rsz) +'Z';
        }else{          
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + (h - rsz) +
                    'q0,' + rsz + ',' + (-rsz) + ',' + rsz +
                    'l' + (-(b_w - rsz * 2)) + ',0' +
                    'q' + (-rsz) + ',0,' + (-rsz) + ',' + (-rsz) +
                    'l0,' + (-(h - rsz)) +'Z';
        }
        return strPath;
      });
    
    stock
      .append('g')
      .attr('class', 'group-red')
      .selectAll('path-group-red')
      .data(data)
      .enter()
      .append('path')      
      .attr('fill','#df072c')
      .attr('d', (d) => {
        let strPath = '', rsz = 5, b_w = 30,
            x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2;

        if(d.ConsolidatedNetIncome > 0){
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,0' +                    
                    'l' + (-b_w) + ',0' +                    
                    'l0,0Z';
        }else{          
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,0' +                    
                    'l' + (-b_w) + ',0' +                    
                    'l0,0Z';
        }
        return strPath;
      });

    stock
      .select('.group-red')
      .selectAll('path')
      .transition().duration(durate)
      .attr('d', (d) => {
        let strPath = '', b_w = 30,
            x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2;
        let ratio = d.DividendPayoutRatio > 100 ? 100 : d.DividendPayoutRatio,
            h = Math.abs(y(d.ConsolidatedNetIncome * ratio / 100) - y(0));

        if(d.ConsolidatedNetIncome > 0){
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + (-h) +                    
                    'l' + (-b_w) + ',0' +                    
                    'l0,' + h +'Z';
        }else{          
          strPath = 'M' + (x_pos - b_w / 2) + ',0' +
                    'l' + b_w + ',0' +
                    'l0,' + h +                    
                    'l' + (-b_w) + ',0' +                    
                    'l0,' + (-h) +'Z';
        }
        return strPath;
      });

    //add stock line
    stock
      .append('g')
      .attr('class', 'stock-lines')
      .selectAll('stock-line')
      .data(data)
      .enter()
      .append('path')
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('d', d => {
        let x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2;
        return 'M' + x_pos + ',0l0,0';        
      });

    stock
      .select('.stock-lines')
      .selectAll('path')
      .transition().duration(durate)
      .attr('d', d => {
        let ratio = d.DividendPayoutRatio > 100 ? 100 : d.DividendPayoutRatio,
            h = Math.abs(y(d.ConsolidatedNetIncome * ratio / 100) - y(0)),
            x_pos = x(formatTime(new Date(d.Date))) + x.bandwidth()/2, b_w = 30;
        if(d.ConsolidatedNetIncome < 0){
          return 'M' + x_pos + ',' + (h - 10) + 'l0,20';
        } else{
          return 'M' + x_pos + ',' + (-h - 10) + 'l0,20';
        }
      });

    //add percent text
    stock
      .append('g')
      .attr('class', 'text-percents')
      .selectAll('text-percent')
      .data(data)
      .enter()
      .append('text')
      .attr('fill','grey')
      .attr('x', d => x(formatTime(new Date(d.Date))) + x.bandwidth()/2 + 20)
      .attr('y', 0)
      .attr('text-anchor', 'start')
      .attr('alignment-baseline', 'central')
      .attr('opacity', 0)
      .style('font-size', '11pt')
      .text(d => d.DividendPayoutRatio > 100 ? 100 + '%' : Math.floor(d.DividendPayoutRatio) + '%');
    stock
      .select('.text-percents')
      .selectAll('text')
      .transition().duration(durate)
      .attr('opacity', 1)      
      .attr('y', d => {
        let ratio = d.DividendPayoutRatio > 100 ? 100 : d.DividendPayoutRatio,
            h = Math.abs(y(d.ConsolidatedNetIncome * ratio / 100) - y(0));
        return d.ConsolidatedNetIncome < 0 ? h : -h;
      });
      
  }
  render() {
    return (
      <g className="Axis">
        <g className="xAxis" ref={el => (this.xAxisElement = el)}/>
        <g className="yAxis" ref={el => (this.yAxisElement = el)}/>
        <g className="barArea" ref={el => (this.barArea = el)}/>
      </g>
    );
  }
}

class StockChart extends Component {
  constructor(props) {
    super(props);
    const { width, height, data, ptwidth } = this.props;
    let margin = { top: 0, right: 0, bottom: 40, left: 0 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };
    this.state = {
      svgDimen: svgDimen,
      margin: margin,
      ptwidth: ptwidth,
      data: data
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data, ptwidth } = nextProps;
    let margin = { top: 0, right: 0, bottom: 40, left: 0 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };
    this.setState({
      svgDimen: svgDimen,
      margin: margin,
      ptwidth: ptwidth,
      data: data
    });
  }
  render() {    
    const { svgDimen, data, ptwidth } = this.state;

    let real_width = svgDimen.width,
      top_legend_height = svgDimen.height * 0.1,
      bottom_legend_height = svgDimen.height * 0.25;
    return (
      <svg width={ptwidth} height={svgDimen.height}>
        <g width={svgDimen.width} height={svgDimen.height}  transform={`translate(${(ptwidth - svgDimen.width) / 2}, 0)`}>
          <g className="topLegend" transform={`translate(${svgDimen.width / 2}, 5)`}>
            <text
              alignmentBaseline="text-before-edge"
              textAnchor="middle"
              dy="0.6em"
              style={{ fontSize: 22, fill: '#bdbbbc', fontWeight: 'bold' }}
            >
              *Net Income
            </text>
          </g>
          <Axis
            svgDimen={svgDimen}
            top_margin={top_legend_height + 30}
            bottom_margin={bottom_legend_height}
            data={data}
          />
          <g
            className="bottomLegend"
            transform={`translate(${(svgDimen.width - real_width) / 2 + 30}, ${svgDimen.height - bottom_legend_height})`}
          >
            <g className="leftLegend" transform={`translate(10, ${bottom_legend_height / 2})`}>
              <circle r="5" cx="5" cy="0" fill="#de0730" />
              <text
                x="15"
                y="0"
                alignmentBaseline="central"
                textAnchor="start"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Dividend
              </text>
            </g>
            <g
              className="centerLegend"
              transform={`translate(${svgDimen.width / 3 }, ${bottom_legend_height / 2})`}
            >
              <circle r="5" cx="5" cy="0" fill="#bdbbbc" />
              <text
                x="15"
                y="0"
                alignmentBaseline="central"
                textAnchor="start"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Retained
              </text>
              <text
                x="15"
                dy="15"
                alignmentBaseline="central"
                textAnchor="start"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Earnings
              </text>
            </g>
            <g
              className="rightLegend"
              transform={`translate(${(svgDimen.width * 2) / 3 - 20}, ${bottom_legend_height / 2})`}
            >
              <text
                x="15"
                y="0"
                alignmentBaseline="central"
                textAnchor="start"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                % Pay-out
              </text>
              <text
                x="40"
                dy="15"
                alignmentBaseline="central"
                textAnchor="start"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                ratio
              </text>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default StockChart;
