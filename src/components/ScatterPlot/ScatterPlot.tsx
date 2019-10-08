import React from 'react'
import * as d3 from 'd3'
import XYAxis from '../XYAxis'
import DataAgreggate from '../DataAgreggate'
import { ScatterPlotProps } from './types'

const settings = {
  width: 800,
  height: 500,
  padding: 80,
}

const ScatterPlot: React.SFC<ScatterPlotProps> = (props) => {

  const { data } = props

  /**
   * Determine the x scale
   */
  function getXScale() {
    const xMax = d3.max(data, (d: Array<number>) => d[0])
    return d3.scaleLinear()
      .domain([0, xMax])
      .rangeRound([settings.padding, (settings.width - settings.padding * 2)])
  }

  /**
   * Determine the y scale
   */
  function getYScale() {
    const yMax = d3.max(data, (d: Array<number>) => d[1])
    return d3.scaleLinear()
      .domain([0, yMax])
      .rangeRound([settings.height - settings.padding, settings.padding])
  }

  const xScale = getXScale();
  const yScale = getYScale();

  return (
    <div className="graphContainer">
      <svg width={settings.width} height={settings.height}>
        <DataAgreggate xScale={xScale} yScale={yScale} data={data} {...settings} />
        <XYAxis xScale={xScale} yScale={yScale} {...settings} />
      </svg>
    </div>
  )
}

export default ScatterPlot
