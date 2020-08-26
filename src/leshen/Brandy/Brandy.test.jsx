import React from 'react'
import { render } from 'setup-tests'
import Brandy from '.'

describe('Brandy', () => {
  test('should render as default', () => {
    const { container } = render(<Brandy variant="legal" text="example" />)
    expect(container).toMatchSnapshot()
  })

  test('should render the symbol if it is provided', () => {
    const { container } = render(
      <Brandy variant="small" text="example" symbol="asdf" />
    )
    expect(container).toMatchSnapshot()
  })

  test('should render only the text if a symbol is not provided', () => {
    const { getByText } = render(<Brandy variant="feature" text="example" />)
    getByText('example')
  })

  test('should render pass the variant prop to the Typography component', () => {
    const { container } = render(
      <>
        <Brandy variant="h1" text="example" />
        <Brandy variant="h2" text="example" />
        <Brandy variant="h3" text="example" />
        <Brandy variant="h4" text="example" />
        <Brandy variant="h5" text="example" />
        <Brandy variant="h6" text="example" />
        <Brandy variant="feature" text="example" />
        <Brandy variant="body" text="example" />
        <Brandy variant="small" text="example" />
        <Brandy variant="legal" text="example" />
      </>
    )

    expect(container).toMatchSnapshot()
  })
})
