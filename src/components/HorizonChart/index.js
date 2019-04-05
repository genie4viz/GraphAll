import React, { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';

function HorizonChart({ data }) {
  const svgRef = useRef(null);
  const xAxisRef = useRef(null);
  const width = 1344;
  const height = data.length * 50;
  const step = 39;
  const overlap = 5;
  const margin = { top: 30, right: 10, bottom: 0, left: 10 };
  const mirror = true;

  //if (data.globalQuotes === undefined) {
  //  return null;
  // }

  //if (data.globalQuotes.length === 0) {
  //  return null;
  // }
  const max = d3.max(data, d => d3.max(d.globalQuotes, d => Math.abs(d.close)));
  const minDate = Date.parse(data[0].globalQuotes[0].date);
  const maxDate = Date.parse(data[0].globalQuotes[data[0].globalQuotes.length - 1].date);

  const color = i => d3['schemePiYG'][overlap * 2 + 1][i + (i >= 0) + overlap];
  const x = d3
    .scaleTime()
    .domain([minDate, maxDate])
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([-max, +max])
    .range([overlap * step, -overlap * step]);

  const xAxis = d3
    .axisTop(x)
    .ticks(width / 80)
    .tickSizeOuter(0);

  const area = d3
    .area()
    .curve(d3.curveStep)
    .defined(d => !isNaN(d.close))
    .x(d => x(Date.parse(d.date)))
    .y0(0)
    .y1(d => y(d.close));

  const [selected, setSelected] = useState(false);

  const mouseOver = x => {
    setSelected(x);
  };

  const mouseOut = () => {
    setSelected(null);
  };

  useEffect(() => {
    d3.select(xAxisRef.current).call(xAxis);
    d3.select(svgRef.current).on('mouseover', d => {
      mouseOver(d3.event.layerX);
    });
    d3.select(svgRef.current).on('mouseout', d => {
      mouseOut();
    });
  });

  return (
    <>
      <p>X position: {selected}</p>
      <svg width={width} height={height} ref={svgRef}>
        <g>
          {data.map((d, i) => {
            const arrayFrom = Array.from({ length: overlap * 2 }, (_, i) =>
              Object.assign({ index: i < overlap ? -i - 1 : i - overlap }, d)
            );



            return (
              <g key={i} transform={`translate(0,${i * (step + 1) + margin.top})`}>
                <clipPath id={`clip${i}`}>
                  <rect width={width} height={step} />
                </clipPath>
                <defs>
                  <path id={'path' + i} d={area(d.globalQuotes)} />
                </defs>
                <g clipPath={`url(#clip${i})`}>
                  {arrayFrom.map((d, i2) => (
                    <use
                      key={i2}
                      fill={color(d.index)}
                      transform={
                        mirror && d.index < 0
                          ? `scale(1,-1) translate(0,${d.index * step})`
                          : `translate(0,${(d.index + 1) * step})`
                      }
                      xlinkHref={`#path${i}`}
                    />
                  ))}
                </g>
                <text x={4} y={step / 2} dy={'0.35em'}>
                  {`${d.name} (${d.ticker})`}
                </text>
                {/*{*/}
                {/*  selected && <text x={selected + 4} y={step / 2} dy={'0.35em'}> {`${y(x.invert(selected))}`}</text>*/}
                {/*}*/}
              </g>
            );
          })}
          <g ref={xAxisRef} transform={`translate(0,${margin.top})`} />
        </g>
        {selected&&<g>
          <line x1={selected} y1="0" x2={selected} y2={height} style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }} />
        </g>}
      </svg>
    </>
  );
}

export default HorizonChart;
