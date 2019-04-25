import React, { useEffect, useState, useRef } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import * as d3 from 'd3';

const RoundGraph = props => {
  const { security, index } = props;
  let dataUpdated = [
    {
      index: 0.7,
      text: 'Dividend',
      value: security.d / 100,
      allValues: [security.d, 25, 50, 75]
    },
    {
      index: 0.6,
      text: 'Balans',
      value: security.b / 100,
      allValues: [security.b, 25, 50, 75]
    },
    {
      index: 0.5,
      text: 'Growth',
      value: security.g / 100,
      allValues: [security.g, 25, 50, 75]
    },
    {
      index: 0.4,
      text: 'Valuation',
      value: security.v / 100,
      allValues: [security.v, 25, 50, 75]
    }
  ];
  let width = props.parentWidth,
    height = props.parentWidth * 0.9;

  const roundRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    drawRound();
    drawLine();
  }, [props]);

  const drawRound = () => {
    let colors = { red: '#f45b63', orange: '#f49d73', green: '#72c14a' };
    const setColor = total => {
      return total <= 50 ? colors.red : total >= 70 ? colors.green : colors.orange;
    };
    const setFontSize = radius => {
      return radius <= 120 ? 11 : radius >= 180 ? 14 : 12;
    };
    let radius = Math.min(width, height) / 1.6,
      spacing = 0.09;

    d3.select(roundRef.current)
      .selectAll('*')
      .remove();

    let arcBody = d3
      .arc()
      .startAngle(0)
      .endAngle(d => d.value * 2 * Math.PI)
      .innerRadius(d => d.index * radius)
      .outerRadius(d => (d.index + spacing) * radius)
      .cornerRadius(2);

    let field = d3
      .select(roundRef.current)
      .selectAll('g')
      .data(dataUpdated, d => d.value)
      .enter()
      .append('g');

    var arcs = field
      .append('path')
      .attr('class', 'arc-body')
      .style('fill', () => setColor(security.t));

    arcs
      .style('stroke', '#fff')
      .style('stroke-width', 2)
      .on('click', function(d) {
        arcs.style('fill', 'grey');
        d3.select(this).style('fill', setColor(security.t));
        d3.select('.text-all' + index).attr('opacity', 1);
      })
      .on('mouseover', function(d) {
        d3.select(this).style('stroke-width', 0);
      })
      .on('mouseout', function(d) {
        d3.select(this).style('stroke-width', 2);
      })
      .transition()
      .duration(750)
      .attrTween('d', arcTween(arcBody));

    d3.select(roundRef.current)
      .append('text')
      .attr('class', 'text-all' + index)
      .attr('transform', 'translate(' + radius * 0.7 + ',' + radius * 0.7 + ')')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
      .style('text-decoration', 'underline')
      .style('font-size', 16)
      .style('fill', 'grey')
      .attr('opacity', 0)
      .text('All')
      .style('cursor', 'pointer')
      .on('click', function() {
        arcs.style('fill', setColor(security.t));
        d3.select(this).attr('opacity', 0);
      });

    function arcTween(arc) {
      return function(d) {
        var i = d3.interpolateNumber(0, d.value);
        return function(t) {
          d.value = i(t);
          return arc(d);
        };
      };
    }
  };
  const drawLine = () => {
    const { security } = props;
    let w = (Math.min(width, height) / 1.9) * 0.8 * Math.cos((Math.PI / 180) * 45); // 0.4 from small radius
    d3.select(lineRef.current)
      .selectAll('*')
      .remove();
    let data = [
      { date: '2016-09-01', value: 10 },
      { date: '2017-09-01', value: 40 },
      { date: '2018-09-01', value: 20 },
      { date: '2019-09-01', value: 25 },
      { date: '2020-09-01', value: 50 }
    ];
    const bisect = d3.bisector(d => d.date).right,
      parseTime = d3.timeParse('%Y-%m-%d');

    let field = d3
      .select(lineRef.current)
      .append('g')
      .attr('transform', 'translate(' + -w / 2 + ',' + -w / 2 + ')'); //transform as smallest radius of round.

    data = data.map(function(d) {
      d.strdate = d.date;
      d.date = parseTime(d.date);
      d.value = +d.value;
      return d;
    });
    const tooltip = field.append('g');

    let x = d3
        .scaleTime()
        .range([0, w])
        .domain(d3.extent(data, d => d.date))
        .clamp(true),
      y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .rangeRound([w, 0]),
      xAxis = d3.axisBottom(x).tickSize(0),
      yAxis = d3.axisLeft(y).tickSize(0);

    let xArea = field.append('g');
    xArea
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + w + ')')
      .attr('opacity', 0)
      .call(xAxis)
      .select('.domain')
      .remove();

    let yArea = field.append('g');
    yArea
      .attr('class', 'y axis')
      .attr('opacity', 0)
      .call(yAxis)
      .select('.domain')
      .remove();

    let line = d3
      .line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    field
      .append('g')
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 3)
      .attr('d', line);
    //add percent
    field
      .append('text')
      .attr('transform', 'translate(' + w / 2 + ',' + w + ')')
      .style('fill', 'green')
      .style('font-weight', 'bold')
      .style('font-size', 18)
      .attr('text-anchor', 'middle')
      .text('72%');

    field
      .on('mousemove', function() {
        var x0 = x.invert(d3.mouse(field.node())[0]),
          i = bisect(data, x0, 0),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        tooltip.attr('transform', `translate(${x(d.date)},${y(d.value)})`).call(callout, x(d.date), d);
        tooltip.raise();
      })
      .on('mouseleave', () => tooltip.call(callout, null));

    function callout(g, x_pos, d) {
      if (!d) return g.style('display', 'none');

      g.style('display', null)
        .style('pointer-events', 'none')
        .style('font', '10px sans-serif');

      g.selectAll('circle')
        .data([null])
        .join('circle')
        .attr('r', 7)
        .attr('fill', 'white')
        .attr('stroke', 'green')
        .style('stroke-width', 3);

      const text = g
        .selectAll('text')
        .data([null])
        .join('text')
        .call(text =>
          text
            .selectAll('tspan')
            .data((d.strdate + '').split(/\n/))
            .join('tspan')
            .attr('x', 0)
            .style('font-weight', 'bold')
            .style('font-size', 12)
            .style('fill', 'grey')
            .attr('text-anchor', x_pos + 20 > w ? 'end' : 'middle')
            .text(d.strdate)
        );
      const { x, y, width: tw, height: th } = text.node().getBBox();
      text.attr('transform', 'translate(0,' + -th + ')');
    }
  };
  return (
    <svg className={'roundChart' + index} width={width} height={height}>
      <g className={'round' + index} ref={roundRef} transform={`translate(${width / 2}, ${height / 2})`} />
      <g className={'line' + index} ref={lineRef} transform={`translate(${width / 2}, ${height / 2})`} />
    </svg>
  );
};

export default ResponsiveWrapper(RoundGraph);
