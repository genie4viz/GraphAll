//Better circula graph from swizec
//
// https://codesandbox.io/s/x970vx8x8q

//import React from "react";
import D3blackbox from './D3blackbox';
import * as d3 from 'd3';

const CircularGraph = D3blackbox(function(anchor, props, state) {
  const { width, height, security, t, d, b, g, v } = props;

  var colors = {
    red: '#f45b63',
    orange: '#f49d73',
    green: '#72c14a'
  };

  const setColor = total => {
    return total <= 50 ? colors.red : total >= 70 ? colors.green : colors.orange;
  };

  const setFontSize = radius => {
    return radius <= 120 ? 11 : radius >= 180 ? 14 : 12;
  };

  var radius = Math.min(width, height) / 1.9,
    spacing = 0.09;

  var dataUpdated = [
    {
      index: 0.7,
      text: 'Dividend',
      value: d / 100,
      allValues: [d, 25, 50, 75]
    },
    {
      index: 0.6,
      text: 'Balans',
      value: b / 100,
      allValues: [b, 25, 50, 75]
    },
    {
      index: 0.5,
      text: 'Growth',
      value: g / 100,
      allValues: [g, 25, 50, 75]
    },
    {
      index: 0.4,
      text: 'Valuation',
      value: v / 100,
      allValues: [v, 25, 50, 75]
    }
  ];

  var tooltip = d3.select(`.tooltip-${security.id}`);

  d3.select(anchor.current)
    .select('g')
    .remove();

  var arcBody = d3
    .arc()
    .startAngle(0)
    .endAngle(function(d) {
      return d.value * 2 * Math.PI;
    })
    .innerRadius(function(d) {
      return d.index * radius;
    })
    .outerRadius(function(d) {
      return (d.index + spacing) * radius;
    })
    .cornerRadius(2);

  /** sparkline */

  function sparkline(elemId, data) {
    var width = 150;
    var height = 30;
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain([0, 4]);
    y.domain([0, 100]);

    var line = d3
      .line()
      .x(function(d, i) {
        return x(i);
      })
      .y(function(d, i) {
        return y(d);
      });

    var sparklineSvg = d3
      .select(elemId)
      .append('svg')
      .attr('width', width)
      .attr('class', 'sparkline-wrapper-svg')
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(0, 2)');

    sparklineSvg
      .append('path')
      .datum(data)
      .attr('class', 'sparkline')
      .attr('id', 'current-path-' + elemId.replace('#', ''))
      .attr('d', line);
  }

  /** sparkline */

  var svg = d3
    .select(anchor.current)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  svg
    .append('text')
    .attr('class', 'center-text')
    .style('font-weight', 'bold')
    .style('alignment-baseline', 'middle')
    .style('text-anchor', 'middle')
    .style('font-size', 20)
    .style('fill', setColor(t))
    .text(t + '%');

  var field = svg
    .selectAll('g')
    .data(dataUpdated, function(d) {
      return d.value;
    })
    .enter()
    .append('g');

  var arcs = field
    .append('path')
    .attr('class', 'arc-body')
    .style('fill', function(d) {
      return setColor(t);
    });

  field
    .append('text')
    .attr('dy', '-.15em')
    .attr('dx', '-0.75em')
    .style('text-anchor', 'middle')
    .attr('transform', function(d) {
      return 'translate(' + [0, -d.index * radius] + ')';
    })
    .style('font-size', function() {
      return setFontSize(radius);
    })
    .style('font-weight', 'bold')
    .style('fill', setColor(t))
    .text(function(d) {
      return d.text.split('')[0];
    });

  arcs
    .style('stroke', '#fff')
    .style('stroke-width', 2)
    .on('mouseover', function(d) {
      let position = anchor.current.getBoundingClientRect();
      d3.select(this).style('stroke-width', 0);

      tooltip
        .html(
          `<b>${d.text}</b><br/>
          <div className='sparkGraph sparkGraph-${security.id}'></div>
          ${d.allValues.join(' - ')}
          `
        )
        // .style("left", `${d3.event.pageX - 160}px`)
        // .style("top", `${d3.event.pageY - 80}px`)
        .style('left', `${position.x + position.width / 2 - 140}px`)
        .style('top', `${position.y + position.height / 2 - 40}px`)
        .transition()
        .duration(200)
        .style('opacity', 0.9);

      sparkline(`.sparkGraph-${security.id}`, d.allValues);
    })
    .on('mouseout', function(d) {
      tooltip
        .transition()
        .duration(500)
        .style('opacity', 0);
      d3.select(this).style('stroke-width', 2);
    })
    .transition()
    .duration(750)
    .attrTween('d', arcTween(arcBody));

  function arcTween(arc) {
    return function(d) {
      var i = d3.interpolateNumber(0, d.value);
      return function(t) {
        d.value = i(t);
        return arc(d);
      };
    };
  }
});

export default CircularGraph;
