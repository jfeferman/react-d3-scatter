import React, { Component } from 'react'
import * as d3 from 'd3'
import { AxisProps } from './types'

class Axis extends Component<AxisProps> {
  private axisContainer = React.createRef<SVGGElement>();

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis = () => {
    const { orient, scale } = this.props
    const node = this.axisContainer.current
    let axis
    if (orient === 'bottom') {
      axis = d3.axisBottom()
        .ticks(5)
        .scale(scale)
    } else {
      axis = d3.axisLeft()
        .ticks(5)
        .scale(scale)
    }

    d3.select(node).call(axis)
  }

  render() {
    const { translate } = this.props
    return (
      <g className="axis" ref={this.axisContainer} transform={translate} />
    )
  }
}

export default Axis
