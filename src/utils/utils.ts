import * as d3 from 'd3'
import { IPlotSettings } from './types'

/**
 * Determine the x scale
 * @param data The data set
 * @param settings Plot settings
 */
export const getXScale = (data: Array<Array<number>>, settings: IPlotSettings) => {
  const xMax = d3.max(data, (d: Array<number>) => d[0])
  return d3.scaleLinear()
    .domain([0, xMax])
    .rangeRound([settings.padding, (settings.width! - settings.padding! * 2)])
}

/**
 * Determine the y scale
 * @param data The data set
 * @param settings Plot settings
 */
export const getYScale = (data: Array<Array<number>>, settings: IPlotSettings) => {
  const yMax = d3.max(data, (d: Array<number>) => d[1])
  return d3.scaleLinear()
    .domain([0, yMax])
    .rangeRound([settings.height! - settings.padding!, settings.padding])
}