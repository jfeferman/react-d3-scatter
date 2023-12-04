import * as React from 'react'
import renderer from 'react-test-renderer'
import Axis from '../Axis'
import { getXScale, getYScale } from '../../../utils/testUtil'

describe('components/Axis', () => {
  it('matches the snapshot of the x axis', () => {
    const wrapper = renderer.create(<Axis orient="bottom" scale={getXScale()} translate="0" />).toJSON()
  })

  it('matches the snapshot of the y axis', () => {
    const wrapper = renderer.create(<Axis orient="" scale={getYScale()} translate="0" />).toJSON()
  })
})
