import React from 'react'
import renderer from 'react-test-renderer'
import {
  mockData,
  getXScale,
  getYScale,
} from '../../../utils/testUtil'
import DataPoint from '../../DataPoint'

describe('components/DataPoint', () => {
  it('matches the snapshot of the component', () => {
    const wrapper = renderer.create(
      <DataPoint
        coords={mockData[0]}
        xScale={getXScale}
        yScale={getYScale}
      />,
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
