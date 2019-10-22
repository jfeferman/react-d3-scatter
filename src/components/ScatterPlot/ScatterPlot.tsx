import React from 'react'
import XYAxis from '../XYAxis'
import DataAgreggate from '../DataAgreggate'
import { ScatterPlotProps } from './types'
import { getXScale, getYScale } from '../../utils/utils';
import { IPlotSettings } from '../../utils/types'

const ScatterPlot: React.SFC<ScatterPlotProps> = (props) => {
  let { data } = props
  data = data || [];

  // User defined on ScatterPlot instance
  const {
    width,
    height,
    padding,
    radius,
  } = props

  const settings: IPlotSettings = {
    width: width || 600,
    height: height || 400,
    padding: padding || 60,
    radius: radius || 2,
  }

  const xScale = getXScale(data, settings);
  const yScale = getYScale(data, settings);

  return (
    <div className="graphContainer">
      <svg width={settings.width} height={settings.height}>
        <DataAgreggate xScale={xScale} yScale={yScale} data={data} {...settings} />
        <XYAxis xScale={xScale} yScale={yScale} settings={settings} />
      </svg>
    </div>
  )
}

export default ScatterPlot
