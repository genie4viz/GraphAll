import React, { Component } from 'react';
import * as d3 from 'd3';

class BarGroup extends React.Component {
  constructor(props) {
    super(props);
    const { data, bandwidth, xScale, step_data } = this.props;

    this.state = {
      data: data,
      bandwidth: bandwidth,
      xScale: xScale,
      step_data: step_data
    };
  }
  componentDidMount() {
    this.drawBars();
  }
  componentDidUpdate() {
    this.drawBars();
  }
  componentWillReceiveProps(nextProps) {
    const { data, xScale, bandwidth, step_data } = nextProps;
    this.setState({
      data: data,
      bandwidth: bandwidth,
      xScale: xScale,
      step_data: step_data
    });
  }

  drawBars() {
    const { data, xScale, bandwidth, step_data } = this.state;
    let yScale = d3
      .scaleBand()
      .domain(data.values.slice(0, 4).map(d => d.label))
      .rangeRound([0, bandwidth]);
    let step = 100 / step_data.range;
    let bar_data = data.values.slice(0, 4).map(d => {
      d.label = d.label;
      d.value = +d.value;
      return d;
    });
    let ebitdas = data.values.slice(4, 5).map(d => {
      d.label = d.label;
      d.value = +d.value;
      return d;
    });

    let color = d3.scaleOrdinal().range(['#bdbbbc', '#63ae2d', '#929292', '#000700']);

    d3.select(this.el)
      .selectAll('*')
      .remove();
    d3.select(this.el)
      .selectAll('rect')
      .data(bar_data)
      .enter()
      .append('rect')
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('x', d => (d.value > 0 ? xScale(0) : xScale(d.value * step)))
      .attr('width', d => (d.value > 0 ? xScale(d.value * step - 100) : xScale(0) - xScale(d.value * step)))
      .attr('height', yScale.bandwidth())
      .attr('y', d => {
        return yScale(d.label);
      })
      .style('fill', d => color(d.label))
      .style('opacity', d => (d.label.includes('Ebitda') ? 0 : 1));

    // // //add EBITDA
    d3.select(this.el)
      .selectAll('path')
      .data(ebitdas)
      .enter()
      .append('path')
      .attr(
        'd',
        d => 'M' + xScale(d.value * step) + ' -1 L' + xScale(d.value * step) + ' ' + (yScale.bandwidth() + 2) + ' Z'
      )
      .style('stroke', '#de0730')
      .style('stroke-width', 3);
    //.style("opacity", d =>  d.label.includes("bitda")==true ? 0 : 1);

    // //add percent
    d3.select(this.el)
      .selectAll('text')
      .data(bar_data)
      .enter()
      .append('text')
      .attr('x', d => (d.value > 0 ? xScale(d.value * step) : xScale(d.value * step)))
      .attr('y', d => (d.label.includes('Ebitda') == false ? yScale(d.label) + yScale.bandwidth() / 2 + 5 : 0))
      .attr('dx', d => (d.value > 0 ? 5 : -5))
      .text(d => (d.value == 0 ? '' : d.value.toFixed(0) + ''))
      .attr('text-anchor', d => (d.value > 0 ? 'start' : 'end'))
      .attr('alignment-baseline', 'central')
      .style('font-size', 12)
      .style('fill', 'grey');
  }
  render() {
    return <g ref={el => (this.el = el)} />;
  }
}
class Axis extends React.Component {
  constructor(props) {
    super(props);
    const { svgDimen, margins, data } = this.props;
    let xScale = d3
      .scaleLinear()
      .range([0, svgDimen.width - margins.left - margins.right - 50])
      .domain([-100, 100]);

    let y0Scale = d3
      .scaleBand()
      .rangeRound([svgDimen.height - margins.bottom, 0])
      .padding(0.01)
      .domain(data.map(d => d.year));

    this.state = {
      svgDimen: svgDimen,
      margins: margins,
      xScale: xScale,
      y0Scale: y0Scale,
      data: data,
      bandwidth: y0Scale.bandwidth(),
      step_data: this.getRange(data)
    };
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentWillReceiveProps(nextProps) {
    const { svgDimen, margins, data } = nextProps;
    let xScale = d3
      .scaleLinear()
      .range([0, svgDimen.width - margins.left - margins.right - 50])
      .domain([-100, 100]);

    let y0Scale = d3
      .scaleBand()
      .rangeRound([svgDimen.height - margins.bottom, 0])
      .padding(0.01)
      .domain(data.map(d => d.year));

    this.setState({
      svgDimen: svgDimen,
      margins: margins,
      xScale: xScale,
      y0Scale: y0Scale,
      data: data,
      bandwidth: y0Scale.bandwidth(),
      step_data: this.getRange(data)
    });
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  renderAxis() {
    const { xScale, y0Scale, svgDimen, margins } = this.state;
    let xAxis = d3
      .axisBottom(xScale)
      .tickSize(svgDimen.height - margins.bottom)
      .ticks(10);
    let yAxis = d3.axisLeft(y0Scale).tickSize(0);

    d3.select(this.xAxisElement)
      .selectAll('*')
      .remove();
    d3.select(this.yAxisElement)
      .selectAll('*')
      .remove();

    d3.select(this.xAxisElement)
      .attr('class', 'x axis')
      .call(xAxis)
      .select('.domain')
      .remove();

    d3.select(this.xAxisElement)
      .selectAll('.tick line')
      .attr('stroke', '#777')
      .attr('stroke-dasharray', '2,2');

    d3.select(this.yAxisElement)
      .attr('class', 'y axis')
      .call(yAxis)
      .select('.domain')
      .remove();

    d3.select(this.yAxisElement)
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .style('text-anchor', 'middle')
      .style('fill', 'black');
  }
  getRange(data) {
    let arr = [];
    let cnv_data = data.map(d => {
      d.year = d.year;
      d.values = d.values;
      return d;
    });

    for (let i = 0; i < cnv_data.length; i++) {
      for (let j = 0; j < cnv_data[i].values.length; j++) {
        if (!cnv_data[i].values[j].value) cnv_data[i].values[j].value = 0;
        arr.push(cnv_data[i].values[j].value);
      }
    }

    let min = d3.min(d3.values(arr)),
      max = d3.max(d3.values(arr)),
      range = Math.abs(max - min);
    return { min: min, max: max, range: range };
  }
  render() {
    const { data, xScale, y0Scale, step_data, bandwidth } = this.state;

    return (
      <g className="Axis">
        <g className="xAxis" transform={`translate(50,0)`} ref={el => (this.xAxisElement = el)} />
        <g className="yAxis" transform={`translate(40,0)`} ref={el => (this.yAxisElement = el)} />
        {data.map((d, i) => {
          return (
            <g key={i} className={`bar-group${d.year}`} transform={`translate(50, ${y0Scale(d.year)})`}>
              <BarGroup key={i} data={d} xScale={xScale} bandwidth={bandwidth} step_data={step_data} />
            </g>
          );
        })}
      </g>
    );
  }
}
class NegativeChart extends Component {
  constructor(props) {
    super(props);
    const { width, height, data } = this.props;
    let margins = { top: 20, right: 5, bottom: 20, left: 20 },
      svgDimen = { width: width - margins.left - margins.right, height: height - margins.top - margins.bottom };

    this.state = {
      margins: margins,
      svgDimen: svgDimen,
      data: data
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data } = nextProps;
    let margins = { top: 20, right: 5, bottom: 20, left: 20 },
      svgDimen = { width: width - margins.left - margins.right, height: height - margins.top - margins.bottom };

    this.setState({
      margins: margins,
      svgDimen: svgDimen,
      data: data
    });
  }

  render() {
    const { svgDimen, margins, data } = this.state;
    return (
      <svg className="graphSvg" width={svgDimen.width} height={svgDimen.height} transform={`translate(${(this.props.width - svgDimen.width )/ 2}, 0)`}>
        <Axis svgDimen={svgDimen} margins={margins} data={data} />
      </svg>
    );
  }
}

export default NegativeChart;
