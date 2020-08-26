import React from 'react'
import { render } from 'setup-tests'
import VariableContent from '.'

describe('VariableContent', () => {
  test('VariableContent should render', () => {
    const { container } = render(
      <VariableContent
        heading="Heading"
        subheading="Subheading"
        mainContent={
          <>
            <p>Main Content</p>
          </>
        }
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
