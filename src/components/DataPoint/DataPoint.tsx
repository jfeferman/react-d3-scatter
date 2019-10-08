import React from 'react'
import { DataPointProps } from './types'

const DataPoint: React.SFC<DataPointProps> = (props) => {
  const {
    coords,
    xScale,
    yScale,
  } = props

  if (!coords) {
    return null
  }

  return (
    <circle
      cx={xScale(coords[0])}
      cy={yScale(coords[1])}
      r={2}
      key={Math.random() * 1}
    />
  )
}

export default DataPoint
