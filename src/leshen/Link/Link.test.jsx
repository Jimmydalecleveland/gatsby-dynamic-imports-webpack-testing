import React from 'react'
import { render } from 'setup-tests'
import Link from '.'

describe('Link', () => {
  test('should render relative link when passed relative URL', () => {
    const { container, getByText } = render(
      <Link to="/some-page">Call To Action Text</Link>
    )

    const linkTag = getByText(/call to action/i)
    expect(linkTag).toHaveAttribute('href', '/some-page')
    expect(linkTag).not.toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkTag).not.toHaveAttribute('target', '_blank')

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="/some-page"
      >
        Call To Action Text
      </a>
    `)
  })

  test('should render without target blank when given tel:', () => {
    const { container, getByText } = render(
      <Link to="tel:666-666-6666">Call To Talk to Satan</Link>
    )

    const linkTag = getByText(/call to talk/i)
    expect(linkTag).toHaveAttribute('href', 'tel:666-666-6666')
    expect(linkTag).not.toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkTag).not.toHaveAttribute('target', '_blank')
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="tel:666-666-6666"
      >
        Call To Talk to Satan
      </a>
    `)
  })

  test('should render with external link attributes', () => {
    const { container, getByText } = render(
      <Link to="https://www.jamesbruner.com/">PAGING MR BRUNER...</Link>
    )

    const linkTag = getByText(/paging mr bruner/i)
    expect(linkTag).toHaveAttribute('target', '_blank')
    expect(linkTag).toHaveAttribute('rel', 'noopener noreferrer')
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="https://www.jamesbruner.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        PAGING MR BRUNER...
      </a>
    `)
  })

  test('should render shorthand url as external', () => {
    const { container, getByText } = render(
      <Link to="www.google.com">lmgtfy</Link>
    )

    const linkTag = getByText(/lmgtfy/i)
    expect(linkTag).toHaveAttribute('target', '_blank')
    expect(linkTag).toHaveAttribute('rel', 'noopener noreferrer')
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        href="www.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        lmgtfy
      </a>
    `)
  })
})
