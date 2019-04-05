import React, { Component } from 'react'

export default function D3blackbox(D3render) {
  return class Blackbox extends Component {
    anchor = React.createRef()

    componentDidMount() {
      D3render(this.anchor, this.props, this.state)
    }
    componentDidUpdate() {
      D3render(this.anchor, this.props, this.state)
    }

    render() {
      const { x, y } = this.props
      const Component = this.props.component || 'g'

      return <Component transform={`translate(${x}, ${y})`} ref={this.anchor} />
    }
  }
}

export const useD3 = function(render) {
  const refAnchor = React.useRef(null)

  React.useEffect(() => {
    render(refAnchor.current)
  })

  return refAnchor
}
