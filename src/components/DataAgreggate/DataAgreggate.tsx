import { DataPoint } from '../DataPoint'

export type DataAgreggateProps = {
  data: number[]
  xScale: () => void
  yScale: () => void
  radius?: number
}


export const DataAgreggate = ({data, xScale, yScale, radius}: DataAgreggateProps) => {
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
