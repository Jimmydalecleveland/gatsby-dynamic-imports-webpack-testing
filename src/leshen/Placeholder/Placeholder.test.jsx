import React from 'react'
import { render } from 'setup-tests'

import Placeholder from '.'
import Typography from '../Typography'

describe('Placeholder', () => {
  test('should render each type', () => {
    const { container } = render(
      <>
        <Placeholder>
          <Typography variant="small">Notice</Typography>
          <Typography>This is a quick notification for you to read</Typography>
        </Placeholder>
        <Placeholder type="warning">
          <Typography variant="small">Notice</Typography>
          <Typography>This is a quick notification for you to read</Typography>
        </Placeholder>
        <Placeholder type="error">
          <Typography variant="small">Notice</Typography>
          <Typography>This is a quick notification for you to read</Typography>
        </Placeholder>
      </>
    )

    expect(container).toMatchSnapshot()
  })

  test('should return nothing when in production', () => {
    // TODO: Does this need to be cleared before tests after it run?
    process.env.NODE_ENV = 'production'
    const { container } = render(
      <Placeholder>
        <Typography variant="small">Notice</Typography>
        <Typography>This is a quick notification for you to read</Typography>
      </Placeholder>
    )

    expect(container).toBeEmpty()
  })
})
