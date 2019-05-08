import React, { useEffect, useRef, useState } from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import * as d3 from 'd3';

const HorizonGraph = props => {
  const step = 49,
    overlap = 5,
    height = props.data.length * 62,
    margin = { top: 20, right: 10, bottom: 0, left: 10 },
    color = i => d3['schemePiYG'][overlap * 2 + 1][i + (i >= 0) + overlap];

  const [selected, setSelected] = useState(false);
  const [max, setMax] = useState(d3.max(props.data, d => d3.max(d.globalQuotes, d => Math.abs(d.close))));
  let idx;
  if (props.data[0].globalQuotes.length > 500) idx = props.data[0].globalQuotes.length - 500;
  else idx = 0;

  const [minDate, setMinDate] = useState(Date.parse(props.data[0].globalQuotes[idx].date));

  const [maxDate, setMaxDate] = useState(
    Date.parse(props.data[0].globalQuotes[props.data[0].globalQuotes.length - 1].date)
  );

  const svgRef = useRef(null);
  const drawAreaRef = useRef(null);

  useEffect(() => {
    drawHorizon();
  }, [props]);

  useEffect(() => {
    d3.select(svgRef.current).on('mousemove', () => {
      var svgNode = d3.select(svgRef.current).node();
      var x_pos = d3.mouse(svgNode)[0];
      if (
        d3
          .select(svgRef.current)
          .select('.point-line')
          .empty()
      ) {
        d3.select(svgRef.current)
          .append('path')
          .attr('class', 'point-line')
          .attr('d', 'M' + x_pos + ',0L' + x_pos + ',' + height)
          .attr('stroke', 'black')
          .attr('stroke-width', 1);
      } else {
        d3.select(svgRef.current)
          .select('.point-line')
          .attr('d', 'M' + x_pos + ',0L' + x_pos + ',' + height);
      }

      const x = d3
        .scaleTime()
        .domain([minDate, maxDate])
        .range([0, props.parentWidth]);
      const y = d3
        .scaleLinear()
        .domain([-max, +max])
        .range([overlap * step, -overlap * step]);

      var parseTime = d3.timeParse('%Y-%m-%d'),
        bisectDate = d3.bisector(d => parseTime(d.date)).left;

      var x0 = x.invert(d3.mouse(svgNode)[0]);
      var x1 = x.invert(0);
      var is, d0, d1, d, tmp_ptText, ptText, isOffset, isZero;
      isZero = bisectDate(props.data[0].globalQuotes, x1, 1);
      d1 = props.data[0].globalQuotes[isZero];
      d1.close = 0;
      for (var p = 0; p < props.data.length; p++) {
        is = bisectDate(props.data[p].globalQuotes, x0, 1);
        isOffset = bisectDate(props.data[p].globalQuotes, x1, 1);
        //d0 = props.data[p].globalQuotes[is - 1];
        //d1 = props.data[p].globalQuotes[is] ? props.data[p].globalQuotes[is] : d0;
        //d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        is = isOffset > is ? isOffset : is;

        d = props.data[p].globalQuotes[is] ? props.data[p].globalQuotes[is] : d1;
        d0 = props.data[p].globalQuotes[isOffset] ? props.data[p].globalQuotes[isOffset] : d1;
        if (d0.close == 0) d0.close = props.data[p].globalQuotes[isOffset + 1].close;
        // console.log(p, 'pp');
        // console.log(is, 'is');
        // console.log(isOffset, 'isOffset');
        // console.log(d.close, 'value');
        // console.log(d0.close, 'zvalue');
        tmp_ptText = (((d.close - d0.close) / d0.close) * 100).toFixed(1);
        if (tmp_ptText == 0) 
          tmp_ptText = Math.floor(tmp_ptText);

        ptText = tmp_ptText > 0 ? '+' + tmp_ptText : tmp_ptText;
        d3.selectAll('.point-text')
          .filter('.text' + p)
          .attr('text-anchor', d3.mouse(svgNode)[0] > props.parentWidth - 50 ? 'end' : 'start')
          .text(ptText + '%');
      }
      d3.selectAll('.point-text').attr('x', x_pos + 1);
    });
  }, [props]);

  const drawHorizon = () => {
    setMax(d3.max(props.data, d => d3.max(d.globalQuotes, d => Math.abs(d.close))));
    setMinDate(Date.parse(props.data[0].globalQuotes[0].date));
    setMaxDate(Date.parse(props.data[0].globalQuotes[props.data[0].globalQuotes.length - 1].date));

    const x = d3
      .scaleTime()
      .domain([minDate, maxDate])
      .range([0, props.parentWidth]);

    const y = d3
      .scaleLinear()
      .domain([-max, +max])
      .range([overlap * step, -overlap * step]);

    const xAxis = d3
      .axisTop(x)
      .ticks(Math.floor(props.parentWidth / 80))
      .tickSizeOuter(0);

    const area = d3
      .area()
      .curve(d3.curveStep)
      .defined(d => !isNaN(d.close))
      .x(d => x(Date.parse(d.date)))
      .y0(0)
      .y1(d => y(d.close));

    d3.select(drawAreaRef.current)
      .selectAll('*')
      .remove();

    props.data.map((d, i) => {
      const arrayFrom = Array.from({ length: overlap * 2 }, (_, i) =>
        Object.assign({ index: i < overlap ? -i - 1 : i - overlap }, d)
      );
      let e_g = d3
        .select(drawAreaRef.current)
        .append('g')
        .attr('transform', 'translate(0, ' + (i * (step + 10) + margin.top) + ')');
      e_g
        .append('clipPath')
        .attr('id', 'clip' + i)
        .append('rect')
        .attr('width', props.parentWidth)
        .attr('height', step);
      e_g
        .append('defs')
        .append('path')
        .attr('id', 'path' + i)
        .attr('d', area(d.globalQuotes));

      let s_e_g = e_g.append('g').attr('clip-path', 'url(#clip' + i + ')');

      arrayFrom.map((e, k) => {
        s_e_g
          .append('use')
          .attr('fill', color(e.index))
          .attr(
            'transform',
            e.index < 0
              ? 'scale(1, -1) translate(0, ' + e.index * step + ')'
              : 'translate(0,' + (e.index + 1) * step + ')'
          )
          .attr('xlink:href', '#path' + i);
      });

      e_g
        .append('text')
        .attr('class', 'point-text text' + i)
        .attr('x', 4)
        .attr('y', step / 3)
        .style('font-size', '11pt')
        .attr('dy', '0.25em');

      e_g
        .append('text')
        .attr('x', 4)
        .attr('y', step / 2)
        .attr('dy', '1.5em')
        .style('font-weight', 'bold')
        .style('fill', 'grey')
        .style('font-size', '10pt')
        .text(d.name + ' ' + d.ticker);
    });

    d3.select(drawAreaRef.current)
      .append('g')
      .attr('transform', 'translate(0,' + margin.top + ')')
      .call(xAxis);
  };

  return (
    <>
      <svg width={props.parentWidth} height={height} ref={svgRef}>
        <g ref={drawAreaRef} />
      </svg>
    </>
  );
};

export default ResponsiveWrapper(HorizonGraph);
