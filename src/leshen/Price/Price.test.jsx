import React from 'react'
import { render } from 'setup-tests'
import Price from '.'

describe('Price', () => {
  test('Price should render', () => {
    const { container } = render(<Price amount="43.99" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Price should render with a label if provided', () => {
    const { container, getByText } = render(
      <Price prefix="Starting at" amount="43.99" />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(getByText(/starting at/i))
  })
})
