import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends React.Component {
  constructor(props) {
    super(props);
    const { svgDimen, top_margin, bottom_margin, data } = this.props;
    let formatTime = d3.timeFormat('%Y');
    let max = d3.max(data.map(d => d.ConsolidatedNetIncome));
    let x = d3
        .scaleBand()
        .range([0, svgDimen.width - 60])
        .domain(
          data.map(function(d) {
            return formatTime(new Date(d.Date));
          })
        ),
      y = d3
        .scaleLinear()
        .domain([0, max])
        .range([svgDimen.height - top_margin - bottom_margin, 0]);

    this.state = {
      svgDimen: svgDimen,
      top_margin: top_margin,
      bottom_margin: bottom_margin,
      x: x,
      y: y,
      max: max,
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
    let max = d3.max(data.map(d => d.ConsolidatedNetIncome));
    let formatTime = d3.timeFormat('%Y');
    let x = d3
        .scaleBand()
        .range([0, svgDimen.width - 60])
        .domain(data.map(d => formatTime(new Date(d.Date)))),
      y = d3
        .scaleLinear()
        .domain([0, max])
        .range([svgDimen.height - top_margin - bottom_margin, 0]);
    this.setState({
      svgDimen: svgDimen,
      top_margin: top_margin,
      bottom_margin: bottom_margin,
      x: x,
      y: y,
      max: max,
      data: data
    });
  }
  renderAxis() {
    const { x, y } = this.state;
    let xAxis = d3
        .axisBottom(x)
        .tickSize(0)
        .tickPadding(15),
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
    d3.select(this.xAxisElement)
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll('text')
      .style('font-size', 16);

    d3.select(this.yAxisElement)
      .attr('class', 'y axis')
      .call(yAxis);
    // d3.select(this.yAxisElement)
    //     .append('text')
    //     .attr('x', -20)
    //     .attr('y', -10)
    //     .style("text-anchor", "central")
    //     .style('fill', 'black')
    //     .text("%");
  }
  render() {
    const { svgDimen, top_margin, bottom_margin, data, x, max } = this.state;
    let bar_height = svgDimen.height - top_margin - bottom_margin;
    return (
      <g className="Axis">
        <g
          className="xAxis"
          transform={`translate(40,${svgDimen.height - bottom_margin})`}
          ref={el => (this.xAxisElement = el)}
        />
        <g className="yAxis" transform={`translate(40,${top_margin})`} ref={el => (this.yAxisElement = el)} />
        {data.map((d, i) => {
          return (
            <g
              key={i}
              className={`bar${d.Date}`}
              transform={`translate(${40 + x.bandwidth() * i + x.bandwidth() / 2} ,${svgDimen.height - bottom_margin})`}
            >
              <Bars key={i} data={d} max={max} bar_width={x.bandwidth()} bar_height={bar_height} />
            </g>
          );
        })}
      </g>
    );
  }
}
class Bars extends Component {
  constructor(props) {
    super(props);
    const { data, bar_width, bar_height, max } = this.props;
    this.state = {
      data: data,
      bar_width: bar_width,
      bar_height: bar_height,
      max: max
    };
  }
  componentDidMount() {
    this.drawBar();
  }
  componentDidUpdate() {
    this.drawBar();
  }
  componentWillReceiveProps(nextProps) {
    const { bar_width, bar_height, data, max } = nextProps;
    this.setState({
      bar_height: bar_height,
      bar_width: bar_width,
      data: data,
      max: max
    });
  }
  // shouldComponentUpdate(nextProps, nextState){
  //     return this.props.data !== nextProps.data;
  // }
  drawBar() {
    const { bar_width, bar_height, data, max } = this.state;
    let r_bar_width = 40, //bar_width * 0.3,
      rate = bar_height / max;
    if (data.DividendPayoutRatio > 100) data.DividendPayoutRatio = 100;
    let greybarHeight = (data.ConsolidatedNetIncome / 100) * (100 - data.DividendPayoutRatio) * rate;
    let redbarHeight = (data.ConsolidatedNetIncome / 100) * data.DividendPayoutRatio * rate;
    d3.select(this.el)
      .selectAll('*')
      .remove();

    d3.select(this.el)
      .append('rect')
      .attr('x', -r_bar_width / 2)
      .attr('y', -greybarHeight)
      .attr('width', r_bar_width)
      .attr('height', greybarHeight)
      .style('fill', '#bdbbbc');
    d3.select(this.el)
      .append('rect')
      .attr('x', -r_bar_width / 2)
      .attr('y', -(greybarHeight + redbarHeight) + 5)
      .attr('width', r_bar_width)
      .attr('height', redbarHeight - 5)
      .style('fill', '#df072c');
    //round
    d3.select(this.el)
      .append('rect')
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('x', -r_bar_width / 2)
      .attr('y', -(greybarHeight + redbarHeight))
      .attr('width', r_bar_width)
      .attr('height', redbarHeight)
      .style('fill', '#df072c');

    d3.select(this.el)
      .append('line')
      .style('stroke-width', 3)
      .style('stroke', 'black')
      .attr('x1', 0)
      .attr('y1', -greybarHeight - 10)
      .attr('x2', 0)
      .attr('y2', -greybarHeight + 10);

    d3.select(this.el)
      .append('line')
      .style('stroke-width', 3)
      .style('stroke', 'black')
      .attr('x1', 0)
      .attr('y1', -(greybarHeight + redbarHeight) - 10)
      .attr('x2', 0)
      .attr('y2', -(greybarHeight + redbarHeight) + 10);

    d3.select(this.el)
      .append('text')
      .attr('x', r_bar_width / 2 + 5)
      .attr('y', -greybarHeight)
      .attr('alignment-baseline', 'central')
      .attr('text-anchor', 'start')
      .style('font-size', 15)
      .style('fill', '#bdbbbc')
      .text(Math.floor((data.ConsolidatedNetIncome / 100) * (100 - data.DividendPayoutRatio)));
  }
  render() {
    return <g ref={el => (this.el = el)} />;
  }
}
class StockChart extends Component {
  constructor(props) {
    super(props);
    const { width, height, data } = this.props;
    let margin = { top: 20, right: 20, bottom: 20, left: 60 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };
    this.state = {
      svgDimen: svgDimen,
      margin: margin,
      data: data
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data } = nextProps;
    let margin = { top: 20, right: 20, bottom: 20, left: 60 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };
    this.setState({
      svgDimen: svgDimen,
      margin: margin,
      data: data
    });
  }
  render() {
    //d3.select("text").node().getComputedTextLength()
    const { svgDimen, data } = this.state;

    let real_width = svgDimen.width * 0.9,
      top_legend_height = svgDimen.height * 0.1,
      bottom_legend_height = svgDimen.height * 0.25;
    return (
      <svg width={svgDimen.width} transform={`translate(${(this.props.width - svgDimen.width )/ 2}, 0)`} height={svgDimen.height}>
        <g className="topLegend" transform={`translate(${svgDimen.width / 2}, 0)`}>
          <text
            x="0"
            y="0"
            alignmentBaseline="text-before-edge"
            textAnchor="middle"
            style={{ fontSize: 22, fill: '#bdbbbc', fontWeight: 'bold' }}
          >
            *Net Income
          </text>
        </g>
        <Axis svgDimen={svgDimen} top_margin={top_legend_height + 10} bottom_margin={bottom_legend_height} data={data} />
        <g
          className="bottomLegend"
          transform={`translate(${(svgDimen.width - real_width) / 2}, ${svgDimen.height - bottom_legend_height})`}
        >
          <g className="leftLegend" transform={`translate(0, ${bottom_legend_height / 2})`}>
            <circle r="5" cx="5" cy="0" fill="#de0730" />
            <text x="15" y="0" alignmentBaseline="central" textAnchor="start" style={{ fontSize: 16, fill: '#bdbbbc' }}>
              Dividend
            </text>
          </g>
          <g className="centerLegend" transform={`translate(${svgDimen.width / 3}, ${bottom_legend_height / 2})`}>
            <circle r="5" cx="5" cy="0" fill="#bdbbbc" />
            <text x="15" y="0" alignmentBaseline="central" textAnchor="start" style={{ fontSize: 16, fill: '#bdbbbc' }}>
              Retained
            </text>
            <text
              x="15"
              dy="15"
              alignmentBaseline="central"
              textAnchor="start"
              style={{ fontSize: 16, fill: '#bdbbbc' }}
            >
              Earnings
            </text>
          </g>
          <g className="rightLegend" transform={`translate(${(svgDimen.width * 2) / 3}, ${bottom_legend_height / 2})`}>
            <text x="15" y="0" alignmentBaseline="central" textAnchor="start" style={{ fontSize: 16, fill: '#bdbbbc' }}>
              % Pay-out
            </text>
            <text
              x="40"
              dy="15"
              alignmentBaseline="central"
              textAnchor="start"
              style={{ fontSize: 16, fill: '#bdbbbc' }}
            >
              ratio
            </text>
          </g>
        </g>
      </svg>
    );
  }
}

export default StockChart;
