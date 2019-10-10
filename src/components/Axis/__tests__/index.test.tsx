import * as React from 'react'
import { shallow } from 'enzyme'
import Axis from '../Axis'
import {
  getXScale,
  getYScale,
} from '../../../utils/testUtil'

describe('components/Axis', () => {
  it('checks the x axis', () => {
    const wrapper = shallow(
      <Axis
        orient="bottom"
        scale={getXScale()}
        translate="0"
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('checks the y axis', () => {
    const wrapper = shallow(
      <Axis
        orient=""
        scale={getYScale()}
        translate="0"
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
