import React from 'react'
import { Axis } from '../Axis'
import { IPlotSettings } from '../../utils/types'

export type XYAxisProps = {
  xScale: Function
  yScale: Function
  settings: IPlotSettings
}

export const XYAxis = ({ xScale, yScale, settings }: XYAxisProps) => {
  const { height, padding } = settings

  return (
    <g className="xy-axis">
      <Axis translate={`translate(0, ${height! - padding!})`} scale={xScale} orient="bottom" />
      <Axis translate={`translate(${padding}, 0)`} scale={yScale} orient="left" />
    </g>
  )
}

export default XYAxis
