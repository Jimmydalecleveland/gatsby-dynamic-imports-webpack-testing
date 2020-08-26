import React from 'react'
import { render } from 'setup-tests'
import Section from '.'

describe('Section', () => {
  test('Section should render', () => {
    const { container } = render(
      <Section
        heading="Heading"
        subheading="Sub Heading"
        mainContent={<p>Child</p>}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
