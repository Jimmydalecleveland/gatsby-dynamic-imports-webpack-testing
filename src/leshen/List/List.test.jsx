import React from 'react'
import { render } from 'setup-tests'
import List from '.'
import ListItem from './ListItem'

const Done = () => (
  <svg
    data-testid="svgicon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    role="img"
    fill="currentColor"
  >
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
)

describe('List', () => {
  test('List should render', () => {
    const { container } = render(
      <List>
        <ListItem content="One" />
        <ListItem>
          <p>Two</p>
        </ListItem>
      </List>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('List renders with an optional icon', () => {
    const { container, getAllByTestId } = render(
      <List>
        <ListItem icon={<Done />} content="One" />
        <ListItem icon={<Done />}>
          <p>Two</p>
        </ListItem>
      </List>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(getAllByTestId('svgicon'))
  })
})
