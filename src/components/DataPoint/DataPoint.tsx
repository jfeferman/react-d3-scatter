type DataPointProps = {
  coords?: number[]
  xScale: () => number
  yScale: () => number
  radius: number
}

export const DataPoint = ({ xScale, yScale, radius }: DataPointProps) => {
  return <circle cx={xScale()} cy={yScale()} r={radius} key={Math.random() * 1} />
}
