import React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {
  mockData,
  getXScale,
  getYScale,
} from '../../../utils/testUtil'
import DataPoint from '..'

describe('compponents/DataPoint', () => {
  let renderer: TestRenderer.ReactTestRenderer;

  beforeAll(() => {
    renderer = TestRenderer.create(
      <DataPoint
        coords={mockData[0]}
        xScale={getXScale()}
        yScale={getYScale()}
      />,
    )
  })

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
