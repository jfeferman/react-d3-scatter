type DataPointProps = {
  coords: number[]
  xScale: () => void
  yScale: () => void
  radius: number
}

export const DataPoint = ({
  coords, xScale, yScale, radius = 2,
}: DataPointProps) => {
  return (
    <circle
      cx={xScale(coords[0])}
      cy={yScale(coords[1])}
      r={radius}
      key={Math.random() * 1}
    />
  )
}
