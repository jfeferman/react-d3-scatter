import { useEffect } from 'react'
import * as d3 from 'd3'

export type AxisProps = {
  orient: string
  scale: () => void
  translate: string
}

export const Axis = ({ orient, scale, translate }: AxisProps) => {
  const axisContainer = React.createRef<SVGGElement>()

  useEffect(() => {
    renderAxis()
  }, [])

  const renderAxis = () => {
    const node = axisContainer.current
    let axis
    if (orient === 'bottom') {
      axis = d3.axisBottom().ticks(5).scale(scale)
    } else {
      axis = d3.axisLeft().ticks(5).scale(scale)
    }

    d3.select(node).call(axis)
  }

  return <g className="axis" ref={axisContainer} transform={translate} />
}
