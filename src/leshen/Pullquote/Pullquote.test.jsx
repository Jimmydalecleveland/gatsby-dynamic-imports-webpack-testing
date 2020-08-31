import React from "react"
// import fluidRange from '../utils/fluidRange'
import { render } from "setup-tests"
import Pullquote from "."
// import theme from '../utils/theme'

describe("Pullquote", () => {
  test("should render", () => {
    const { container } = render(
      <Pullquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Pullquote>
    )
    expect(container).toMatchSnapshot()

    // TODO: fluidRange currently doesn't work because it returns scss which causes the parser to fail
    // Make sure that it renders as h4's styles
    // expect(container.firstChild.firstChild).toHaveStyle(`
    //   ${fluidRange('font-size', theme.fonts.subheadings.lg.size)}
    //   font-weight: ${theme.fonts.subheadings.lg.weight};
    //   ${fluidRange('line-height', theme.fonts.subheadings.lg.lineHeight)}
    // `)
  })

  test("should render with optional citation", () => {
    const { container } = render(
      <Pullquote cite="John Doe">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
        vero ad deleniti iusto quo sequi omnis? Cupiditate doloribus molestias
        recusandae tenetur fuga ipsam enim.
      </Pullquote>
    )
    expect(container).toMatchSnapshot()
  })
})
