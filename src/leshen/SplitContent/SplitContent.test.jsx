import React from 'react'
import { render } from 'setup-tests'

import SplitContent from '.'
import { FLUID_IMAGE_DATA } from './dummyData'

describe('SplitContent', () => {
  test('should render', () => {
    const { container } = render(
      <SplitContent
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
  })

  test('should not throw an error without an image', () => {
    /**
     * SplitContent uses our 'Image' component, which expects ImageSharp data.
     * However, our build should not break because someone did not pass the correct data.
     * The result of this call should return an error placeholder component unless in production,
     * where it would return null (Placeholder logic)
     */
    const { container } = render(
      <SplitContent
        image={{}}
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

  test('should align image to bottom', () => {
    const { container } = render(
      <SplitContent
        image={FLUID_IMAGE_DATA}
        heading="Heading"
        subheading="Subheading"
        alignImageToBottom
        mainContent={
          <>
            <p>Main Content</p>
          </>
        }
      />
    )
    expect(container.firstChild).toHaveStyle('padding-bottom: 0')
    expect(container.firstChild.firstChild.firstChild).toHaveStyle(
      'align-self: flex-end'
    )
  })
})
