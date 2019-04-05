import React, { Component } from 'react';
import * as d3 from 'd3';

class GaugeChart extends Component {
  constructor(props) {
    super(props);
    const { width, height, data, dataRange } = this.props;

    let margin = { top: 0, right: 20, bottom: 0, left: 20 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };

    if (data[0].value > dataRange.max) data[0].value = dataRange.max;
    else if (data[0].value < dataRange.min) data[0].value = dataRange.min;

    if (data[1].value > dataRange.max) data[1].value = dataRange.max;
    else if (data[1].value < dataRange.min) data[1].value = dataRange.min;

    if (data[2].value > dataRange.max) data[2].value = dataRange.max;
    else if (data[2].value < dataRange.min) data[2].value = dataRange.min;

    data[0].value = data[0].value - dataRange.min;
    data[1].value = data[1].value - dataRange.min;
    data[2].value = data[2].value - dataRange.min;

    this.state = {
      svgDimen: svgDimen,
      data: data,
      dataRange: dataRange
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data, dataRange } = nextProps;
    let margin = { top: 0, right: 20, bottom: 0, left: 20 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };

    if (data[0].value > dataRange.max) data[0].value = dataRange.max;
    else if (data[0].value < dataRange.min) data[0].value = dataRange.min;

    if (data[1].value > dataRange.max) data[1].value = dataRange.max;
    else if (data[1].value < dataRange.min) data[1].value = dataRange.min;

    if (data[2].value > dataRange.max) data[2].value = dataRange.max;
    else if (data[2].value < dataRange.min) data[2].value = dataRange.min;

    data[0].value = data[0].value - dataRange.min;
    data[1].value = data[1].value - dataRange.min;
    data[2].value = data[2].value - dataRange.min;

    if (data[1].value == data[2].value)
      this.setState({
        svgDimen: svgDimen,
        data: data,
        dataRange: dataRange
      });
  }
  componentDidMount() {
    this.drawChart();
  }
  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const { svgDimen, data, dataRange } = this.state;
    let n = 100,
      padding = { top: 40, right: 60, bottom: 40, left: 60 },
      radius = Math.min((svgDimen.width * 0.9 - padding.left - padding.right) / 2, svgDimen.height / 2),
      needleRad = radius - (radius * 2) / 5,
      needleCenterRad = radius * 0.15,
      pi = Math.PI,
      halfPi = pi / 2,
      endAngle = pi / 2,
      startAngle = -endAngle,
      field = d3.range(startAngle, endAngle, pi / n),
      scale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([startAngle, endAngle]);
    let range = Math.abs(dataRange.max - dataRange.min),
      step = 100 / range,
      linearColor = d3
        .scaleLinear()
        .range(['#e2062a', '#ee7e00', '#66ad2b'])
        .domain([0, range / 2, range]);

    if (dataRange.direction == 1)
      linearColor = d3
        .scaleLinear()
        .range(['#e2062a', '#ee7e00', '#66ad2b'])
        .domain([0, range / 2, range]);
    else
      linearColor = d3
        .scaleLinear()
        .range(['#66ad2b', '#ee7e00', '#e2062a'])
        .domain([0, range / 2, range]);

    d3.select(this.el)
      .selectAll('*')
      .remove();

    let arc = d3
      .arc()
      .innerRadius(radius - radius / 5)
      .outerRadius(radius)
      .startAngle((d, i) => scale(i))
      .endAngle((d, i) => scale(i + 1));

    d3.select(this.el)
      .append('g')
      .selectAll('path')
      .data(field)
      .enter()
      .append('path')
      .attr('stroke', (d, i) => (i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec'))
      .attr('fill', (d, i) => (i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec'))
      .attr('d', arc);

    //draw needle
    d3.select(this.el)
      .append('path')
      .attr('class', 'needle')
      .attr('d', function(d) {
        let _in = scale(data[0].value * step + 0.1) - halfPi,
          _im = _in - halfPi,
          _ip = _in + halfPi;

        let topX = needleRad * Math.cos(_in),
          topY = needleRad * Math.sin(_in);

        let leftX = needleCenterRad * Math.cos(_im),
          leftY = needleCenterRad * Math.sin(_im);

        let rightX = needleCenterRad * Math.cos(_ip),
          rightY = needleCenterRad * Math.sin(_ip);
        return (
          'M ' +
          topX +
          ' ' +
          topY +
          ' L ' +
          leftX +
          ' ' +
          leftY +
          ' A ' +
          leftX +
          ' ' +
          leftX +
          ' 1 0 0 ' +
          rightX +
          ' ' +
          rightY +
          ' Z'
        );
      })
      .attr('fill', linearColor(data[0].value));

    // add branche, market label
    let ticks = scale.ticks(100);
    d3.select(this.el)
      .append('g')
      .attr('class', 'label')
      .selectAll('text.label')
      .data(ticks)
      .enter()
      .append('text')
      .attr('transform', function(d) {
        let _in = scale(d) - halfPi;
        let topX = (radius + 10) * Math.cos(_in),
          topY = (radius + 10) * Math.sin(_in);
        return 'translate(' + topX + ',' + topY + ')';
      })
      .style('text-anchor', d => (d < 50 ? 'end' : 'start'))
      .style('font-size', svgDimen.width * 0.045)
      .attr('fill', '#929292')
      .text(function(d) {
        if (d === Math.floor(data[1].value * step)) {
          return 'Branche';
        }
        if (d === Math.floor(data[2].value * step)) {
          return 'Market';
        }
        return '';
      });

    // add marker
    d3.select(this.el)
      .append('g')
      .attr('class', 'marker')
      .selectAll('path.marker')
      .data(ticks)
      .enter()
      .append('path')
      .style('stroke', '#929292')
      .style('stroke-width', function(d) {
        if (d === Math.floor(data[1].value * step)) {
          return 6;
        }
        if (d === Math.floor(data[2].value * step)) {
          return 6;
        }
        return 0;
      })
      .attr('d', function(d) {
        let _in = scale(d) - halfPi;
        let farX = (radius + 5) * Math.cos(_in),
          farY = (radius + 5) * Math.sin(_in),
          nearX = ((radius * 4) / 5 - 5) * Math.cos(_in),
          nearY = ((radius * 4) / 5 - 5) * Math.sin(_in);

        return 'M ' + farX + ' ' + farY + ' L ' + nearX + ' ' + nearY + ' Z';
      });
  }
  render() {
    const { svgDimen, data, dataRange } = this.state;
    let range = Math.abs(dataRange.max - dataRange.min),
      step = 100 / range;
    return (
      <svg width={svgDimen.width} height={svgDimen.height}>
        <g
          width={svgDimen.width}
          className="gaugeChart"
          transform={`translate(${svgDimen.width / 2}, ${svgDimen.height * 0.6})`}
          ref={el => (this.el = el)}
        />
        <g className="legendBottom" transform={`translate(${svgDimen.width / 2}, ${(svgDimen.height * 7) / 8})`}>
          <text
            x="0"
            y="0"
            alignmentBaseline="baseline"
            textAnchor="middle"
            style={{ fontSize: svgDimen.width * 0.06, fill: '#929292' }}
          >
            {data[0].value * step === 0 ? data[0].value * step : (data[0].value * step).toFixed(2)}%
          </text>
          <text
            x="0"
            y="20"
            alignmentBaseline="hanging"
            textAnchor="middle"
            style={{ fontSize: svgDimen.width * 0.05, fill: '#929292' }}
          >
            {dataRange.title}
          </text>
        </g>
      </svg>
    );
  }
}

export default GaugeChart;
