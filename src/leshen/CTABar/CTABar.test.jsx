import React from 'react'
import { render } from 'setup-tests'

import { Phone, Done, QuestionAnswer } from 'emotion-icons/material'
import CTABar from '.'
import StickyBar from './StickyBar'
import Button from '../Button'
import StandardImplementation from './standardImplementation'

jest.mock('emotion-icons/material', () => ({
  Phone: () => <div>Phone icon Mock</div>,
  Done: () => <div>Done icon Mock</div>,
  QuestionAnswer: () => <div>QuestionAnswer icon Mock</div>,
}))

describe('CTABar', () => {
  test('CTABar component should render', () => {
    const { container } = render(
      <CTABar>
        <Button variant="feature" color="light" leftIcon={<Phone />} ghost>
          Call Now: 888-888-8888
        </Button>
        <Button
          variant="feature"
          color="light"
          leftIcon={<QuestionAnswer />}
          ghost
        >
          Chat with agent
        </Button>
        <Button variant="feature" color="light" leftIcon={<Done />} ghost>
          Check Availability
        </Button>
      </CTABar>
    )

    expect(container).toMatchSnapshot()
  })

  test('CTABar with light prop should render', () => {
    const { container } = render(
      <CTABar light>
        <Button variant="feature" color="light" leftIcon={<Phone />} ghost>
          Call Now: 888-888-8888
        </Button>
        <Button
          variant="feature"
          color="light"
          leftIcon={<QuestionAnswer />}
          ghost
        >
          Chat with agent
        </Button>
        <Button variant="feature" color="light" leftIcon={<Done />} ghost>
          Check Availability
        </Button>
      </CTABar>
    )

    expect(container).toMatchSnapshot()
  })

  test('StickyBar component should render', () => {
    const { container } = render(
      <StickyBar showOriginal>
        <CTABar light>
          <Button variant="feature" color="light" leftIcon={<Phone />} ghost>
            Call Now: 888-888-8888
          </Button>
          <Button
            variant="feature"
            color="light"
            leftIcon={<QuestionAnswer />}
            ghost
          >
            Chat with agent
          </Button>
          <Button variant="feature" color="light" leftIcon={<Done />} ghost>
            Check Availability
          </Button>
        </CTABar>
      </StickyBar>
    )

    expect(container).toMatchSnapshot()
  })

  test('StickyBar component with isVisible prop should render', () => {
    const { container } = render(
      <StickyBar isVisible>
        <CTABar>
          <Button variant="feature" color="light" leftIcon={<Phone />} ghost>
            Call Now: 888-888-8888
          </Button>
          <Button
            variant="feature"
            color="light"
            leftIcon={<QuestionAnswer />}
            ghost
          >
            Chat with agent
          </Button>
          <Button variant="feature" color="light" leftIcon={<Done />} ghost>
            Check Availability
          </Button>
        </CTABar>
      </StickyBar>
    )

    expect(container).toMatchSnapshot()
  })

  test('standardImplementation component should render', () => {
    const { container } = render(<StandardImplementation />)

    expect(container).toMatchSnapshot()
  })
})
