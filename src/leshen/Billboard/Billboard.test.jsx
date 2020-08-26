import React from "react"
import { render } from "setup-tests"

import Billboard from "."
import { FLUID_IMAGE_DATA } from "./dummyData"
import theme from "../utils/theme"

describe("Billboard", () => {
  test("should render and have content", () => {
    const { container, getByTestId } = render(
      <Billboard
        image={FLUID_IMAGE_DATA}
        heading="Heading"
        subheading="Subheading"
        mainContent={
          <>
            <p>Main Content</p>
          </>
        }
      />
    )
    expect(container).toMatchSnapshot()
    const contentContainer = getByTestId("Billboard-Content")
    expect(contentContainer).toHaveTextContent("Heading")
    expect(contentContainer).toHaveTextContent("Subheading")
    expect(contentContainer).toHaveTextContent("Main Content")
  })

  test("should render full variant", () => {
    const { container } = render(
      <Billboard
        image={FLUID_IMAGE_DATA}
        variant="full"
        heading="Heading"
        subheading="Subheading"
        mainContent={
          <>
            <p>Main Content</p>
          </>
        }
      />
    )
    expect(container).toMatchSnapshot()
  })

  test("should render prominent, full variant", () => {
    // rerender doesn't work for styles as expected. Otherwise this
    // should probably be in the previous test as a rerender of props.
    const { getByTestId } = render(
      <Billboard
        image={FLUID_IMAGE_DATA}
        backgroundColor="Prominent"
        variant="full"
        heading="Heading"
        subheading="Subheading"
        mainContent={
          <>
            <p>Main Content</p>
          </>
        }
      />
    )

    const sectionContainer = getByTestId("Billboard-Section")
    const contentContainer = getByTestId("Billboard-Content")
    expect(contentContainer).toMatchSnapshot()
    expect(sectionContainer).toHaveStyle(`
        color: #fff;
        background-color: ${theme.colors[theme.prominent].base.hex};
    `)
    expect(contentContainer).toHaveStyle(`
        color: #fff;
    `)
  })
})
