import React from 'react'

import { render } from 'setup-tests'
import { FLUID_IMAGE_DATA } from './dummyData'

import Hero from '.'

describe('Hero', () => {
  test('SplitContent should render', () => {
    const { container } = render(
      <Hero image={FLUID_IMAGE_DATA}>
        <p>Hero</p>
      </Hero>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
