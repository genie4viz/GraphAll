import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
  constructor(props) {
    super(props);
    const { data, width, height } = this.props;
    this.state = {
      data: data,
      width: width,
      height: height
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, data } = nextProps;
    this.setState({
      width: width,
      height: height,
      data: data
    });
  }
  render() {
    const { width, height, data } = this.state;
    let margins = { top: 20, right: 20, bottom: 20, left: 0 },
      svgDimen = { width: width - margins.left - margins.right, height: height - margins.bottom - margins.top },
      o_imgW = 514,
      o_imgH = 64,
      s_imgW = svgDimen.width * 0.6,
      s_imgH = (s_imgW / o_imgW) * o_imgH,
      top_legend_height = svgDimen.width * 0.03,
      legend_label_height = svgDimen.width * 0.045;

    let left_data = [data.TotalCash, data.CurrentAssetsNoCash, data.NonCurrentAssetsNoGoodwill, data.Goodwill];
    let right_data = [data.TotalEquity, 0, 0, data.TotalLiabilities];

    return (
      <svg width={svgDimen.width} height={svgDimen.height + 10}>
        <g width={svgDimen.width} height={svgDimen.height} transform={`translate(${margins.left}, 0)`}>
          <g className="chartBase" transform={`translate(${svgDimen.width / 2} , 0)`}>
            <g className="topLegend" transform={`translate(0 , ${top_legend_height - 10})`}>
              <text x={-s_imgW / 3} dy=".5em" style={{ fontSize: 16, fill: '#bdbbbc', fontWeight: 'bold' }}>
                Assets
              </text>
              <text x={s_imgW / 12} dy=".5em" style={{ fontSize: 16, fill: '#bdbbbc', fontWeight: 'bold' }}>
                Total Liabilities
              </text>
            </g>
            <g
              className="leftLegend"
              transform={`translate(${-svgDimen.width / 2} , ${top_legend_height + legend_label_height})`}
            >
            <g>
              <circle r="5" cx="35" cy="0" fill="#63ae2d" />
              <text
                x="45"
                y="2"
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Cash
              </text>
              </g>
              <g>
              <circle r="5" cx="35" cy={legend_label_height} fill="#a6ae2d" />
              <text
                x="45"
                y={legend_label_height + 2}
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Current
              </text>
              </g>
              <g>
              <circle r="5" cx="35" cy={legend_label_height * 2} fill="#ef7d00" />
              <text
                x="45"
                y={legend_label_height * 2 + 2}
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Fixed
              </text>
              </g>
              <g>
              <circle r="5" cx="35" cy={legend_label_height * 3} fill="#de0730" />
              <text
                x="45"
                y={legend_label_height * 3 + 2}
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Goodwill
              </text>
              </g>
            </g>
            <g
              className="rightLegend"
              transform={`translate(${svgDimen.width * 0.3} , ${top_legend_height + legend_label_height})`}
            >
              <circle r="5" cx="10" cy="0" fill="#63ae2d" />
              <text
                x="20"
                y="2"
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Equity
              </text>
              <circle r="5" cx="10" cy={legend_label_height} fill="#de0730" />
              <text
                x="20"
                y={legend_label_height + 2}
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fontSize: 14, fill: '#bdbbbc' }}
              >
                Debt
              </text>
            </g>
            <g className="chartBoard" transform={`translate(0 , ${svgDimen.height - s_imgH - legend_label_height})`}>
              <Bar
                transX={-s_imgW / 4}
                svgDimen={svgDimen}
                bar_height={svgDimen.height - s_imgH - top_legend_height - legend_label_height}
                data={left_data}
                identy="left"
              />
              <Bar
                transX={s_imgW / 4}
                svgDimen={svgDimen}
                bar_height={svgDimen.height - s_imgH - top_legend_height - legend_label_height}
                data={right_data}
                identy="right"
              />
            </g>
            <image
              href="/static/balance.png"
              width={s_imgW}
              height={s_imgH}
              x={-s_imgW / 2}
              y={svgDimen.height - s_imgH - legend_label_height}
            />
            <g className="bottomLegend" transform={`translate(0 , ${svgDimen.height - legend_label_height + 10})`}>
              <text
                dominantBaseline="middle"
                textAnchor="middle"
                dy="6"
                style={{ fontSize: 16, fill: '#000', fontWeight: 'bold' }}
              >
                € {(data.TotalLiabilitiesStockholdersEquity / 100).toFixed(0)} mld
              </text>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
class Bar extends Component {
  constructor(props) {
    super(props);
    const { transX, bar_height, svgDimen, data, identy } = this.props;
    this.state = {
      transX: transX,
      bar_height: bar_height,
      svgDimen: svgDimen,
      data: data,
      identy: identy
    };
  }
  componentDidMount() {
    this.drawBar();
  }
  componentWillReceiveProps(nextProps) {
    const { transX, svgDimen, bar_height, data, identy } = nextProps;
    this.setState({
      transX: transX,
      bar_height: bar_height,
      svgDimen: svgDimen,
      data: data,
      identy: identy
    });
  }
  componentDidUpdate() {
    this.drawBar();
  }
  drawBar() {
    const { svgDimen, bar_height, data, identy } = this.state;

    let bar_width = svgDimen.width * 0.25,
      durate = 1000,
      rate = bar_height / 100;
    let step = 0;

    let barArea = d3.select(this.el);
    let colors = ['#63ae2d', '#a6ae2d', '#ef7d00', '#de0730'];
    barArea.selectAll('*').remove();
    let t_height = 0;
    for (let p = 0; p < data.length; p++) {
      step += data[p];
    }
    step = 100 / step;

    for (let p = 0; p < data.length; p++) {
      data[p] = data[p] * step;
      t_height += data[p] * rate;
    }

    function retHeight(i) {
      let sh = 0;
      for (let k = 0; k < i; k++) {
        sh += data[k] * rate;
      }
      return sh;
    }
    for (let i = 0; i < data.length; i++) {
      barArea
        .append('path')
        .attr('class', 'balance_bar' + identy + i)
        .attr('d', () => {
          return (
            'M' +
            -bar_width / 2 +
            ',0l' +
            bar_width +
            ',0l0,' +
            -(t_height - retHeight(i)) +
            'l' +
            -bar_width +
            ',0l0,' +
            (t_height - retHeight(i)) +
            'z'
          );
        })
        // .attr("d", () => {
        //   return 'M' + (-bar_width/2) + ',0l' + bar_width + ',0l0,-1l' + (-bar_width) + ',0l0,1z';
        // })
        .style('fill', colors[i]);
      // .style('opacity', 0);

      // d3.select('.balance_bar' + identy + i)
      //   .transition().duration(durate)
      //   .style('opacity', 1);

      barArea
        .append('text')
        .attr('x', 0)
        .attr('y', function() {
          let sh = 0;
          for (let k = 0; k < i; k++) {
            sh += data[k] * rate;
          }
          return -(t_height - sh - (data[i] * rate) / 2);
        })
        .attr('dominant-baseline', 'middle')
        .style('fill', 'white')
        .style('opacity', function() {
          if (data[i] == 0) {
            return 0;
          } else {
            return 1;
          }
        })
        .style('text-anchor', 'middle')
        .style('font-size', 16)
        .text(data[i] > 10 ? data[i].toFixed(0) + '%' : '');
    }
  }
  render() {
    const { transX, svgDimen } = this.state;
    let img_diff = svgDimen.width * 0.017;
    return <g className="Bar" transform={`translate(${transX} , ${img_diff})`} ref={el => (this.el = el)} />;
  }
}
class Handle extends Component {
  constructor(props) {
    super(props);
    const { margins, years, svgDimen, initialValue, xScale } = this.props;
    this.state = {
      svgDimen: svgDimen,
      years: years,
      margins: margins,
      initialValue: initialValue,
      xScale: xScale
    };
  }
  onMouseOver() {
    this.setState({
      handle: this.props.handle
    });
  }
  componentWillReceiveProps(nextProps) {
    const { initialValue, years, margins, svgDimen, xScale } = nextProps;
    this.setState({
      initialValue: initialValue,
      years: years,
      margins: margins,
      svgDimen: svgDimen,
      xScale: xScale
    });
  }
  render() {
    const { initialValue, xScale } = this.state;
    const { handle } = this.props;

    const circle = <circle r="7px" fill="#de0730" />;
    const text = <text style={{ opacity: 1, fontSize: 14, fill: '#de0730', fontWeight: '600' }} />;

    return (
      <g
        className={handle}
        transform={`translate(${xScale(initialValue)}, 19)`}
        onMouseOver={this.onMouseOver.bind(this)}
      >
        {text}
        {circle}
      </g>
    );
  }
  componentDidUpdate(prevProps) {
    const { margins, svgDimen, xScale, initialValue } = this.state;
    const { onChangeYear, handle } = this.props;

    let mouseValue, trueMouseValue;

    if (prevProps.svgDimen.width != this.state.svgDimen.width || prevProps.years != this.state.years) {
      d3.select('.' + handle).attr('transform', 'translate(' + xScale(initialValue) + ', 19)');
      d3.select('.' + handle)
        .select('text')
        .attr('dominant-baseline', 'middle')
        .attr('dy', -15)
        .style('text-anchor', 'middle')
        .text(initialValue);
    } else {
      const drag = d3
        .drag()
        .on('start', dragstart)
        .on('drag', dragged)
        .on('end', dragend);

      d3.select('.rangeSliderGroup').call(drag);
      function dragstart() {
        mouseValue = d3.mouse(this)[0];
        trueMouseValue = getTrueMouseValue(mouseValue);
        d3.select('.' + handle).attr('transform', 'translate(' + mouseValue + ', 19)');
        d3.select('.' + handle)
          .select('text')
          .attr('dominant-baseline', 'middle')
          .attr('dy', -15)
          .style('text-anchor', 'middle')
          .text(trueMouseValue);
      }
      function dragged() {
        mouseValue = d3.mouse(this)[0];
        trueMouseValue = getTrueMouseValue(mouseValue);
        if (mouseValue > margins.left && mouseValue < svgDimen.width - margins.right) {
          d3.select('.' + handle).attr('transform', 'translate(' + mouseValue + ', 19)');
          d3.select('.' + handle)
            .select('text')
            .attr('dominant-baseline', 'middle')
            .attr('dy', -15)
            .style('text-anchor', 'middle')
            .text(trueMouseValue);
        }
      }
      function dragend() {
        d3.select('.' + handle).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 19)');
        onChangeYear(trueMouseValue);
      }
      function getTrueMouseValue(mouseValue) {
        return Math.round(xScale.invert(mouseValue));
      }
    }
  }
}

class Axis extends React.Component {
  constructor(props) {
    super(props);
    const { years, xScale } = this.props;
    this.state = {
      years: years,
      xScale: xScale
    };
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  componentWillReceiveProps(nextProps) {
    const { years, xScale } = nextProps;
    this.setState({
      years: years,
      xScale: xScale
    });
  }
  renderAxis() {
    const { years, xScale } = this.state;
    let first = years[0];
    let last = years[years.length - 1];

    d3.select(this.axisElement)
      .call(
        d3
          .axisBottom()
          .scale(xScale)
          .ticks(years.length)
          .tickFormat(d3.format(''))
      )
      .selectAll('text')
      .style('opacity', d => (d == first || d == last ? 1 : 0))
      .style('font-size', '14px')
      .style('font-style', 'italic')
      .style('fill', 'grey');

    d3.select(this.axisElement)
      .selectAll('line')
      .attr('stroke', 'white'); //set black when shows axis
    d3.select(this.axisElement)
      .select('path')
      .style('d', 'none');
    d3.select(this.axisElement)
      .select('path')
      .style('stroke', 'white');
    d3.select(this.axisElement)
      .select('path')
      .style('opacity', '0');
  }
  render() {
    return <g className="sliderAxis" transform="translate(0,30)" ref={el => (this.axisElement = el)} />;
  }
}
class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      years: this.props.years
    };
  }
  componentWillReceiveProps(nextProps) {
    const { width, height, years } = nextProps;
    this.setState({
      width: width,
      height: height,
      years: years
    });
  }
  render() {
    const { width, height, years } = this.state;
    const { onChangeYear } = this.props;
    const margins = { top: 20, right: 75, bottom: 20, left: 65 },
      svgDimen = { width: width - margins.left - margins.right, height: height };

    const RangeBar = (
      <rect
        rx="5"
        ry="5"
        y="15"
        width={svgDimen.width - margins.left - margins.right}
        transform={`translate(${margins.left}, 0)`}
        height="8"
        fill="grey"
      />
    );
    let first = years[0];
    let last = years[years.length - 1];
    let xScale = d3
      .scaleLinear()
      .domain([first, last])
      .range([margins.left, svgDimen.width - margins.right])
      .clamp(true);

    return (
      <svg className="rangeSliderSvg" width={svgDimen.width + 60} height={svgDimen.height}>
        <g
          className="rangeSliderSvg"
          width={svgDimen.width}
          height={svgDimen.height}
          transform={`translate(${margins.left}, 0)`}
        >
          <g className="rangeSliderGroup" transform={`translate(0, ${svgDimen.height - margins.bottom - 40})`}>
            {RangeBar}
            <Axis years={years} xScale={xScale} />
            <Handle
              onChangeYear={onChangeYear}
              handle="handle"
              initialValue={last}
              years={years}
              margins={margins}
              svgDimen={svgDimen}
              xScale={xScale}
            />
          </g>
        </g>
      </svg>
    );
  }
}

class BalanceChart extends Component {
  constructor(props) {
    super(props);
    const { data, width, height } = this.props;
    let sort_data = data.sort((x, y) => d3.ascending(x.Date, y.Date));

    this.state = {
      data: sort_data,
      sliderData: this.parseYear(sort_data),
      balanceChartData: sort_data[sort_data.length - 1],
      width: width,
      height: height
    };
  }
  componentWillReceiveProps(nextProps) {
    const { data, width, height } = nextProps;
    let sort_data = data.sort((x, y) => d3.ascending(x.Date, y.Date));

    this.setState({
      sliderData: this.parseYear(sort_data),
      balanceChartData: sort_data[sort_data.length - 1],
      data: sort_data,
      width: width,
      height: height
    });
  }
  parseYear(data) {
    return data.map(d => parseInt(d.Date.split('-')[0]));
  }
  handleChangeYear = curYear => {
    const { data } = this.state;
    let years = data.map(d => parseInt(d.Date.split('-')[0]));
    for (let i = 0; i < data.length; i++) {
      if (years[i] == curYear) {
        this.setState({
          balanceChartData: data[i]
        });
        break;
      }
    }
  };
  render() {
    return (
      <div className="timeslidercharts" width={this.state.width}>
        <div className="rangeSlider">
          <RangeSlider
            onChangeYear={this.handleChangeYear}
            width={this.state.width}
            height={this.state.height / 6}
            years={this.state.sliderData}
          />
        </div>
        <div className="balanceChart">
          <Chart width={this.state.width} height={(this.state.height * 5) / 6} data={this.state.balanceChartData} />
        </div>
      </div>
    );
  }
}

export default BalanceChart;
