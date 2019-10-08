import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { AxisProps } from './types'

const Axis: React.SFC<AxisProps> = (props) => {
  const axisContainer = useRef(null);

  function renderAxis() {
    const { orient, scale } = props
    const node = axisContainer.current
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

  useEffect(() => {
    renderAxis();
  });

  const { translate } = props

  return (
    <g className="axis" ref={axisContainer} transform={translate} />
  )
}

export default Axis
