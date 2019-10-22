import React from 'react'
import * as TestRenderer from 'react-test-renderer';
import {
  getXScale,
  getYScale,
} from '../../../utils/testUtil'
import XYAxis from '..'
import { IPlotSettings } from 'utils/types'

describe('components/XYAxis', () => {
  const settings: IPlotSettings = {
    height: 400,
    padding: 8,
  }
  let renderer: TestRenderer.ReactTestRenderer;
  let instance: TestRenderer.ReactTestInstance;

  beforeAll(() => {
    renderer = TestRenderer.create(
      <XYAxis
        settings={settings}
        xScale={getXScale()}
        yScale={getYScale()}
      />,
    )
    instance = renderer.root;
  })

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot()
  })

  it('verifies there are two axis', () => {
    const axis = instance.findByType('g')
    expect(axis.props.children).toHaveLength(2)
    expect(axis.props.children[0].props.orient).toBe('bottom')
    expect(axis.props.children[1].props.orient).toBe('left')
  });
})
