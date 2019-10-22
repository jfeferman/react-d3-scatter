import React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {
  mockData,
  getXScale,
  getYScale,
} from '../../../utils/testUtil'
import DataAgreggate from '..'

describe('components/DataAgreggate', () => {
  let renderer: TestRenderer.ReactTestRenderer;
  let instance: TestRenderer.ReactTestInstance;

  beforeAll(() => {
    renderer = TestRenderer.create(
      <DataAgreggate
        data={mockData}
        xScale={getXScale()}
        yScale={getYScale()}
      />,
    )
    instance = renderer.root;
  })

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot()
  })

  it('verifies there are two circules', () => {
    const dataAgreggate = instance.findByType('g')
    expect(dataAgreggate.props.children).toHaveLength(2)
  });

  it('verifies there are no children when no data is passed', () => {
    const renderer = TestRenderer.create(
      <DataAgreggate
        data={[]}
        xScale={getXScale()}
        yScale={getYScale()}
      />,
    )
    expect(renderer.toJSON()).toMatchSnapshot()
  });
})
