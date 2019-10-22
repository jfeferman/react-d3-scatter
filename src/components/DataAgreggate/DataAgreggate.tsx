import React from 'react'
import DataPoint from '../DataPoint'
import { DataAgreggateProps } from './types'

const DataAgreggate: React.SFC<DataAgreggateProps> = (props) => {
  const {
    data,
    xScale,
    yScale,
    radius,
  } = props

  // Create an individual data point
  const createDataPoint = (datum: Array<number>, index: number) => {
    return (
      <DataPoint
        key={index}
        xScale={xScale}
        yScale={yScale}
        coords={datum}
        radius={radius}
      />
    )
  }

  // Do not render any data points when data is undefined or length zero
  if (data && data.length === 0) {
    return null
  }

  // Render the data point agreggate
  return (
    <g>
      {data.map((d, i) => {
        return createDataPoint(d, i)
      })}
    </g>
  )
}

export default DataAgreggate
