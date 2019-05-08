import React, { Component } from 'react';
import * as d3 from 'd3';

class GaugeChart extends Component {
  constructor(props) {
    super(props);
    const { width, height, data, dataRange, ptwidth, kind } = this.props;

    let margin = { top: 0, right: 5, bottom: 0, left: 0 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };

    if (data[0].value == null) data[0].value = 0;
    if (data[1].value == null) data[1].value = 0;
    if (data[2].value == null) data[2].value = 0;

    if (kind == 0) {
      if (data[0].value > dataRange.max) data[0].value = dataRange.max;
      else if (data[0].value < dataRange.min) data[0].value = dataRange.min;
    }
    if (data[1].value > dataRange.max) data[1].value = dataRange.max;
    else if (data[1].value < dataRange.min) data[1].value = dataRange.min;

    if (data[2].value > dataRange.max) data[2].value = dataRange.max;
    else if (data[2].value < dataRange.min) data[2].value = dataRange.min;

    if (kind > 0) data[0].value = data[0].value * 100;

    this.state = {
      svgDimen: svgDimen,
      data: data,
      ptwidth: ptwidth,
      dataRange: dataRange,
      kind: kind
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data, dataRange, ptwidth, kind } = nextProps;
    let margin = { top: 0, right: 0, bottom: 0, left: 0 },
      svgDimen = { width: width - margin.left - margin.right, height: height - margin.top - margin.bottom };

    this.setState({
      svgDimen: svgDimen,
      data: data,
      ptwidth: ptwidth,
      dataRange: dataRange,
      kind: kind
    });
  }
  componentDidMount() {
    this.drawChart();
  }
  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const { svgDimen, data, dataRange, ptwidth, kind } = this.state;
    let n = 100,
      radius = Math.min(svgDimen.width * 0.28, svgDimen.height / 2),
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
      preStep1 = data[0].value > 100 ? 100 : data[0].value,
      preStep = preStep1 < 0 ? 0 : preStep1,
      step1 = (range / 100) * preStep,

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

    if (kind == 0)
      d3.select(this.el)
        .append('g')
        .selectAll('path')
        .data(field)
        .enter()
        .append('path')
        .attr('stroke', (d, i) => (i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec'))
        .attr('fill', (d, i) => (i + 1 <= data[0].value * step ? linearColor(data[0].value) : '#e4e7ec'))
        .attr('d', arc);
    else
      d3.select(this.el)
        .append('g')
        .selectAll('path')
        .data(field)
        .enter()
        .append('path')
        .attr('stroke', (d, i) => (i + 1 <= data[0].value ? linearColor(step1) : '#e4e7ec'))
        .attr('fill', (d, i) => (i + 1 <= data[0].value ? linearColor(step1) : '#e4e7ec'))
        .attr('d', arc);
    //draw needle

    let needle = d3
      .select(this.el)
      .append('path')
      .attr('class', 'needle')
      .attr('fill', kind == 0 ? linearColor(data[0].value) : linearColor(step1));

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
        let topX = radius * Math.cos(_in),
          topY = (radius + 10) * Math.sin(_in);
        return 'translate(' + topX + ',' + topY + ')';
      })
      .style('text-anchor', d => (d < 50 ? 'end' : 'start'))
      .style('font-size', svgDimen.width * 0.04 + 'pt')
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
          return 3;
        }
        if (d === Math.floor(data[2].value * step)) {
          return 3;
        }
        return 0;
      })
      .attr('d', function(d) {
        let _in = scale(d) - halfPi;
        let farX = (radius + 2) * Math.cos(_in),
          farY = (radius + 2) * Math.sin(_in),
          nearX = ((radius * 4) / 5 - 2) * Math.cos(_in),
          nearY = ((radius * 4) / 5 - 2) * Math.sin(_in);

        return 'M ' + farX + ' ' + farY + ' L ' + nearX + ' ' + nearY + ' Z';
      });

    function updateNeedle(oldValue, newValue) {
      needle
        .datum({ oldValue: oldValue })
        .transition()
        .duration(2000)
        .attrTween('d', lineTween(newValue));
    }
    function updatePercent(oldValue, newValue) {
      d3.select('.percentText' + kind)
        .datum({ oldValue: oldValue })
        .transition()
        .duration(2000)
        .tween('text', textTween(newValue));
    }
    function textTween(newValue) {
      return function(d) {
        var that = d3.select(this),
          i = d3.interpolate(d.oldValue, newValue);

        return function(t) {
          let val = i(t) == i(t).toFixed(0) ? i(t).toFixed(0) : i(t).toFixed(1);
          that.text(kind == 0 ? val : val + '%');
        };
      };
    }
    function lineTween(newValue) {
      return function(d) {
        var interpolate = d3.interpolate(d.oldValue, newValue);
        return function(t) {
          var _in = interpolate(t) - halfPi,
            _im = _in - halfPi,
            _ip = _in + halfPi;

          var topX = needleRad * Math.cos(_in),
            topY = needleRad * Math.sin(_in);

          var leftX = needleCenterRad * Math.cos(_im),
            leftY = needleCenterRad * Math.sin(_im);

          var rightX = needleCenterRad * Math.cos(_ip),
            rightY = needleCenterRad * Math.sin(_ip);

          return (
            'M' +
            topX +
            ',' +
            topY +
            'L' +
            leftX +
            ',' +
            leftY +
            'A' +
            leftX +
            ',' +
            leftX +
            ',1,0,0,' +
            rightX +
            ',' +
            rightY +
            'Z'
          );
        };
      };
    }
    updateNeedle(scale(0), scale(kind == 0 ? data[0].value * step : preStep) + 0.01);
    updatePercent(0, data[0].value);
  }
  render() {
    const { svgDimen, data, dataRange, ptwidth, kind } = this.state;

    let range = Math.abs(dataRange.max - dataRange.min),
      step = 100 / range;
    return (
      <svg
        width={svgDimen.width}
        height={svgDimen.height}
        transform={`translate(${(ptwidth - svgDimen.width) / 2}, 0)`}
      >
        <g
          width={svgDimen.width}
          className="gaugeChart"
          transform={`translate(${svgDimen.width / 2}, ${svgDimen.height * 0.5})`}
          ref={el => (this.el = el)}
        />
        <g className="legendBottom" transform={`translate(${svgDimen.width / 2}, ${(svgDimen.height * 5) / 7})`}>
          <text
            x="0"
            y="0"
            className={'percentText' + kind}
            textAnchor="middle"
            style={{ fontSize: svgDimen.width * 0.12, fill: '#929292', fontWeight: '600' }}
          >
            {data[0].value == Math.floor(data[0].value) ? data[0].value.toFixed(0) : data[0].value.toFixed(1)}
          </text>
          <text
            x="0"
            y={svgDimen.width * 0.08}
            textAnchor="middle"
            style={{ fontSize: svgDimen.width * 0.065, fill: '#929292' }}
          >
            {dataRange.title}
          </text>
        </g>
      </svg>
    );
  }
}

export default GaugeChart;
