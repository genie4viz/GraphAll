import React, { Component, Fragment } from 'react';
import CircularGraph from './CircularGraph';
import ResponsiveWrapper from './ResponsiveWrapper';

class Graph extends Component {
  state = {
    svgDimensions: null,
    width: null,
    height: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let { parentWidth, parentHeight } = nextProps;

    const svgDimensions = {
      width: Math.max(parentWidth, 200),
      height: 350
    };

    let width = svgDimensions.width;
    let height = svgDimensions.height;

    prevState = { ...prevState, svgDimensions, width, height };
    return prevState;
  }

  render() {
    const { svgDimensions } = this.state;
    const { security, data, year } = this.props;

    return (
      <Fragment>
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <CircularGraph
            x={0}
            y={0}
            width={svgDimensions.width}
            height={svgDimensions.height}
            t={security.t}
            d={security.d}
            b={security.b}
            g={security.g}
            v={security.v}
            security={security}
          />
        </svg>
        <div className={`tooltip tooltip-${security.id}`} style={{ height: '75px' }} />
      </Fragment>
    );
  }
}

export default ResponsiveWrapper(Graph);
