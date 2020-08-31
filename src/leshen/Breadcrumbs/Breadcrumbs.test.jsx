import React from 'react'
import { render } from 'setup-tests'
import Breadcrumbs from '.'
import { CRUMB_DATA } from './dummyData'

describe('Breadcrumbs', () => {
  test('should render', () => {
    const { container, getByText } = render(<Breadcrumbs crumbs={CRUMB_DATA} />)
    expect(container).toMatchSnapshot()
    const internetLink = getByText(/internet/i)
    expect(internetLink).toHaveAttribute('href', '/internet')
    const gigPlansLink = getByText(/gigabit plans/i)
    expect(gigPlansLink).not.toHaveAttribute('href')
  })

  test('should render with path generated crumbs', () => {
    const { container, getByText } = render(
      <Breadcrumbs path="/tv/channels/a-and-e" removeTrailingSlashes />
    )
    const tvLink = getByText(/tv/i)
    expect(tvLink).toHaveAttribute('href', '/tv')
    const channelsLink = getByText(/channels/i)
    expect(channelsLink).toHaveAttribute('href', '/tv/channels')
    expect(container).toMatchSnapshot()
  })

  test('should render with trailing slashes', () => {
    const { getByText } = render(<Breadcrumbs path="/tv/channels/tnt" />)
    const tvLink = getByText(/tv/i)
    expect(tvLink).toHaveAttribute('href', '/tv/')
    const channelsLink = getByText(/channels/i)
    expect(channelsLink).toHaveAttribute('href', '/tv/channels/')
  })
})
