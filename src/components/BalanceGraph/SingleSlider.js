import React, { Component } from 'react';
import * as d3 from 'd3';

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
  
        d3.select('.SingleSliderGroup').call(drag);
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
  class SingleSlider extends Component {
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
        <svg className="SingleSliderSvg" width={svgDimen.width + 60} height={svgDimen.height}>
          <g
            className="SingleSliderSvg"
            width={svgDimen.width}
            height={svgDimen.height}
            transform={`translate(${margins.left}, 0)`}
          >
            <g className="SingleSliderGroup" transform={`translate(0, ${svgDimen.height - margins.bottom - 40})`}>
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
  export default SingleSlider;