import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margins: this.props.margins,
      svgDimen: this.props.svgDimen,
      partial: this.props.partial
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      svgDimen: nextProps.svgDimen,
      margins: nextProps.margins,
      partial: nextProps.partial
    });
  }
  componentDidMount() {
    this.drawGraph();
  }
  componentDidUpdate() {
    this.drawGraph();
  }
  drawGraph() {
    const { svgDimen, margins, partial } = this.state;

    let parseTime = d3.timeParse('%Y-%m-%d');

    let data = partial.columns.slice(2).map(function(id) {
      return {
        id: id,
        values: partial.map(function(d) {
          return {
            date: d.Date,
            value: d[id]
          };
        })
      };
    });

    let area_data = data[0].values.map(function(d) {
      d.date = parseTime(d.date);
      d.value = +d.value;
      return d;
    });

    let min = 0, //d3.min(data[0].values, (d) => d.value),
      max = d3.max(area_data, d => d.value);
    let partial_len = area_data.length;

    let x = d3
      .scaleTime()
      .range([margins.left, svgDimen.width - margins.right])
      .domain(
        d3.extent(area_data, function(d) {
          return d.date;
        })
      )
      .clamp(true);

    let y = d3
      .scaleLinear()
      .range([svgDimen.height - margins.bottom, margins.top])
      .domain([min, max]);

    let area = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.date))
      .y0(y(0))
      .y1(d => y(d.value));

    let svg = d3.select(this.el);
    svg.selectAll('*').remove();

    let ticks_count = Math.floor(svgDimen.width / 120);
    svg
      .append('g')
      .attr('transform', 'translate(0,' + (svgDimen.height - margins.bottom) + ')')
      .call(
        d3
          .axisBottom(x)
          .ticks(ticks_count)
          .tickSize(3)
          .tickFormat(d3.timeFormat('%Y-%m-%d'))
      )
      .selectAll('text')
      .style('font-size', '10px')
      .style('fill', 'black');
    svg
      .append('g')
      .call(d3.axisLeft(y).tickSize(0))
      .select('.domain')
      .style('opacity', 0);

    svg
      .selectAll('.area')
      .data(data)
      .enter()
      .append('path')
      .attr('d', d => area(d.values))
      .style('fill', '#df072c');

    const tooltip = svg.append('g');

    const bisectDate = d3.bisector(function(d) {
      return d.date;
    }).left;

    svg
      .append('rect')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
      .attr('class', 'overlay')
      .attr('width', svgDimen.width - margins.right)
      .attr('height', svgDimen.height - margins.bottom)
      .style('opacity', 0)
      .on('mousemove', function() {
        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(area_data, x0, 1),
          d0 = area_data[i - 1],
          d1 = area_data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;
        tooltip.attr('transform', `translate(${x(d.date)},${y(d.value)})`).call(callout, d.value);
      });
    svg.on('mouseleave', () => tooltip.call(callout, null));
    function callout(g, value) {
      if (!value) return g.style('display', 'none');

      g.style('display', null)
        .style('pointer-events', 'none')
        .style('font', '10px sans-serif');

      g.selectAll('circle')
        .data([null])
        .join('circle')
        .attr('r', 7)
        .style('fill', 'grey')
        .style('stroke', 'white')
        .style('stroke-width', 3);

      const path = g
        .selectAll('path')
        .data([null])
        .join('path')
        .attr('fill', 'grey');
      // .attr("stroke", "white");

      const text = g
        .selectAll('text')
        .data([null])
        .join('text')
        .call(text =>
          text
            .selectAll('tspan')
            .data((value + '').split(/\n/))
            .join('tspan')
            .attr('x', 0)
            .style('font-weight', 'bold')
            .style('font-size', 14)
            .style('fill', 'whredite')
            .text(d => '€ ' + d)
        );

      const { x, y, width: w, height: h } = text.node().getBBox();
      text.attr('transform', `translate(${-w / 2},${15 - y})`);
      path
        .attr('d', `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 10}h-${w + 20}z`)
        .attr('transform', `translate(0,5)`);
      // text.attr("transform", `translate(${-w / 2},${y + 45})`);
      // path.attr("d", `M0,5l-3,10h${-w / 2 - 10}v${h + 10}h${w + 26}v${-h - 10}L3,10L0,5z`);
    }
  }

  render() {
    const { svgDimen } = this.state;
    return <svg className="graphSvg" width={svgDimen.width} height={svgDimen.height} ref={el => (this.el = el)} />;
  }
}

class RangeHandle extends React.Component {
  constructor(props) {
    super(props);
    const { svgDimen, margins, rangeStart, rangeEnd, xScale } = this.props;
    this.state = {
      svgDimen: svgDimen,
      margins: margins,
      rangeStart: rangeStart,
      rangeEnd: rangeEnd,
      xScale: xScale,
      handle: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    const { svgDimen, margins, rangeStart, rangeEnd, xScale } = nextProps;
    this.setState({
      svgDimen: svgDimen,
      margins: margins,
      rangeStart: rangeStart,
      rangeEnd: rangeEnd,
      xScale: xScale,
      handle: ''
    });
  }
  onMouseOver(e) {
    if (e.target.parentNode.className.baseVal == 'sliderBar') {
      this.setState({
        handle: ''
      });
    } else {
      this.setState({
        handle: e.target.parentNode.className.baseVal
      });
    }
  }
  render() {
    const { svgDimen, margins, rangeStart, rangeEnd, xScale } = this.state;
    const rectHandler = (
      <rect
        rx="3"
        ry="3"
        width="10"
        height={svgDimen.height - margins.bottom}
        transform={`translate(-5, 0)`}
        fill="#777"
      />
    );
    const rectFillBar = (
      <rect
        x={xScale(rangeStart)}
        y="0"
        width={xScale(rangeEnd) - xScale(rangeStart)}
        height={svgDimen.height - margins.bottom}
        fill="rgba(150, 150, 150, 0.65)"
      />
    );

    return (
      <g className="sliderBar" onMouseOver={this.onMouseOver.bind(this)}>
        {rectFillBar}
        <g className="handleLeft" ref={el => (this.handleLeft = el)} transform={`translate(${xScale(rangeStart)}, 0)`}>
          {rectHandler}
        </g>
        <g className="handleRight" ref={el => (this.handleRight = el)} transform={`translate(${xScale(rangeEnd)}, 0)`}>
          {rectHandler}
        </g>
      </g>
    );
  }
  componentDidUpdate() {
    const { xScale, handle } = this.state;
    const { changeHandlerValue } = this.props;
    let trueMouseValue,
      that = this;

    let drag;
    if (handle == '') {
      drag = d3
        .drag()
        .on('start', null)
        .on('drag', null)
        .on('end', null);
      d3.select('.sliderBar').call(drag);
    } else {
      drag = d3
        .drag()
        .on('start', dragstart)
        .on('drag', draged)
        .on('end', dragend);
      d3.select('.sliderBar').call(drag);
    }
    function dragstart() {
      trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);
    }
    function draged() {
      if (that.state.rangeEnd - that.state.rangeStart >= 5 * 24 * 3600 * 1000) {
        trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);
        d3.select('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 0)');
        changeHandlerValue(handle, trueMouseValue);
      }
    }
    function dragend() {
      if (that.state.rangeEnd - that.state.rangeStart >= 5 * 24 * 3600 * 1000) {
        d3.select('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 0)');
        changeHandlerValue(handle, trueMouseValue);
      } else {
        if (handle == 'handleLeft') {
          changeHandlerValue(handle, that.state.rangeStart - 24 * 3600 * 1000);
        } else {
          changeHandlerValue(handle, that.state.rangeEnd + 24 * 3600 * 1000);
        }
      }
    }
    function getTrueMouseValue(mouseValue) {
      return Math.round(xScale.invert(mouseValue));
    }
  }
}

class AreaChart extends Component {
  constructor(props) {
    super(props);
    const { data, width, height } = this.props;
    let parseTime = d3.timeParse('%Y-%m-%d');
    let sort_data = data.sort((x, y) => d3.ascending(parseTime(x.Date), parseTime(y.Date)));
    let dates = sort_data.map(d => parseTime(d.Date));
    this.state = {
      total: sort_data,
      partial: sort_data,
      width: width,
      height: height,
      rangeStart: dates[0],
      rangeEnd: dates[dates.length - 1]
    };
  }
  componentWillReceiveProps(nextProps) {
    const { data, width, height } = nextProps;
    let parseTime = d3.timeParse('%Y-%m-%d');
    let sort_data = data.sort((x, y) => d3.ascending(parseTime(x.Date), parseTime(y.Date)));
    let dates = sort_data.map(d => parseTime(d.Date));
    this.setState({
      total: sort_data,
      partial: sort_data,
      width: width,
      height: height,
      rangeStart: dates[0],
      rangeEnd: dates[dates.length - 1]
    });
  }
  componentDidMount() {
    this.renderSliderGraph();
  }
  componentDidUpdate() {
    this.renderSliderGraph();
  }
  renderSliderGraph() {
    const { width, height, total } = this.state;
    const margins = { top: 20, right: 20, bottom: 20, left: 20 },
      svgDimen = { width: width - margins.left - margins.right, height: height / 6 };

    let parseTime = d3.timeParse('%Y-%m-%d');

    let data = total.columns.slice(2).map(function(id) {
      return {
        id: id,
        values: total.map(function(d) {
          return {
            date: parseTime(d.Date),
            value: d[id]
          };
        })
      };
    });

    let min = 0, //d3.min(data[0].values, (d) => d.value),
      max = d3.max(data[0].values, d => d.value);

    let dates = data[0].values.map(d => d.date);
    let x = d3
      .scaleTime()
      .range([margins.left, svgDimen.width - margins.right])
      .domain([dates[0], dates[dates.length - 1]]);

    let y = d3
      .scaleLinear()
      .range([svgDimen.height - margins.bottom, margins.top])
      .domain([min, max]);

    let area = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.date))
      .y0(y(0))
      .y1(d => y(d.value));

    let graph = d3.select(this.GraphAxisElement);
    graph.selectAll('*').remove();

    graph
      .append('g')
      .attr('transform', 'translate(0,' + (svgDimen.height - margins.bottom) + ')')
      .call(
        d3
          .axisBottom(x)
          .ticks(4)
          .tickSize(3)
          .tickFormat(d3.timeFormat('%Y-%m-%d'))
      )
      .selectAll('text')
      .style('font-size', '10px')
      .style('fill', 'black')
      .select('.domain')
      .style('opacity', 0);
    // .attr("transform", "rotate(-65)");
    graph
      .append('g')
      .call(d3.axisLeft(y).tickSize(3))
      .select('.domain')
      .style('opacity', 0);

    graph
      .selectAll('.area')
      .data(data)
      .enter()
      .append('path')
      .attr('d', d => area(d.values))
      .style('fill', '#ddd');
  }
  changeHandlerValue = (handler, date) => {
    const { total, rangeStart, rangeEnd } = this.state;
    let parseTime = d3.timeParse('%Y-%m-%d');
    let partialData = [];
    if (handler == 'handleLeft') {
      for (let i = 0; i < total.length; i++) {
        if (parseTime(total[i].Date) >= date && parseTime(total[i].Date) <= rangeEnd) {
          partialData.push(total[i]);
        }
      }
      partialData.columns = total.columns;
      this.setState({
        rangeStart: date,
        partial: partialData
      });
    } else {
      for (let i = 0; i < total.length; i++) {
        if (parseTime(total[i].Date) <= date && parseTime(total[i].Date) >= rangeStart) {
          partialData.push(total[i]);
        }
      }
      partialData.columns = total.columns;
      this.setState({
        rangeEnd: date,
        partial: partialData
      });
    }
  };
  getTextWidth(text, fontSize, fontFace) {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = fontSize + 'px ' + fontFace;
    return context.measureText(text).width;
  }
  render() {
    const { width, height, total, partial, rangeStart, rangeEnd } = this.state;
    let margins = { top: 20, right: 20, bottom: 20, left: 20 },
      svgDimenSlider = { width: width - margins.left - margins.right, height: height / 6 },
      svgDimenGraph = { width: width - margins.left - margins.right, height: (height * 4) / 6 },
      svgDimen = { width: width - margins.left - margins.right, height: height };

    // parse the date / time
    let parseTime = d3.timeParse('%Y-%m-%d');
    let dates = total.map(d => parseTime(d.Date));

    let x = d3
      .scaleTime()
      .range([margins.left, svgDimen.width - margins.right])
      .domain([dates[0], dates[dates.length - 1]])
      .clamp(true);
    let legend_text1_len = this.getTextWidth('Coca-Cola Company', 16, 'Arial');
    let legend_text2_len = this.getTextWidth('Industry', 16, 'Arial');

    return (
      <svg className="areaChartSvg" width={svgDimen.width} height={svgDimen.height}>
        <g className="TopPane" transform={`translate(${margins.left}, ${height / 12})`}>
          <circle
            r="5"
            cx={svgDimen.width - margins.left - legend_text2_len - legend_text1_len - 60}
            cy="0"
            fill="#de0730"
          />
          <text
            x={svgDimen.width - margins.left - legend_text2_len - 40}
            y="0"
            alignmentBaseline="central"
            textAnchor="end"
            style={{ fontSize: 16, fill: '#bdbbbc' }}
          >
            Coca-Cola Company
          </text>
          <circle r="5" cx={svgDimen.width - margins.left - legend_text2_len - 20} cy="0" fill="#bdbbbc" />
          <text
            x={svgDimen.width - margins.left}
            y="0"
            alignmentBaseline="central"
            textAnchor="end"
            style={{ fontSize: 16, fill: '#bdbbbc' }}
          >
            Industry
          </text>
        </g>
        <g className="Chart" transform={`translate(0, ${height / 6})`}>
          <Chart margins={margins} svgDimen={svgDimenGraph} partial={partial} />
        </g>
        <h3>&nbsp;</h3>
        <g className="graphSliderGroup" transform={`translate(0, ${(height * 5) / 6})`}>
          <g className="graphSliderAxis" ref={el => (this.GraphAxisElement = el)} />
          <RangeHandle
            className="handleRange"
            changeHandlerValue={this.changeHandlerValue}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            svgDimen={svgDimenSlider}
            margins={margins}
            xScale={x}
          />
        </g>
      </svg>
    );
  }
}

export default AreaChart;
