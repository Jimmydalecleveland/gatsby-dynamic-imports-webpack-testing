import React from 'react'
import { render, fireEvent, wait } from 'setup-tests'

import CHANNEL_LINEUP_DATA from './dummyData'
import ChannelLineup from '.'
import chunkArray from '../../utils/chunkArray'

describe('ChannelLineup', () => {
  test('should render', async () => {
    const { container, getByText } = render(
      <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    )

    // We need an assertion inside the wait to work properly
    // otherwise we get the Suspense fallback for the channel lineup
    await wait(() => getByText(/history/i))
    expect(container).toMatchSnapshot()
  })

  test('should filter on user input', async () => {
    const { getByTestId, getByText, queryByText } = render(
      <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    )

    // We are checking to see if history is here before typing 'comedy' into the filter
    // at which point history will no longer be there.
    await wait(() => getByText(/history/i))
    const channelFilter = getByTestId('ChannelLineup-input')
    fireEvent.change(channelFilter, { target: { value: 'comedy' } })
    // We are waiting this test since there is a debounce on the change event
    await wait(() => expect(queryByText(/history/i)).toBeNull())
  })

  // This should probably be broken into multiple tests
  test('cancel button should dynamically render and the input should clear', async () => {
    const { queryByText, getByTestId, queryByTestId } = render(
      <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    )

    // We want to conditionally render the cancel button based on user input
    await wait(() => expect(queryByText('Cancel icon Mock')).toBeNull())
    const channelFilter = getByTestId('ChannelLineup-input')

    fireEvent.change(channelFilter, { target: { value: 'comedy' } })
    await wait(() =>
      expect(queryByTestId('ChannelLineup-cancel')).not.toBeNull()
    )
    await wait(() => expect(channelFilter).toHaveValue('comedy'))

    // We need to test and make sure that pushing any key other than the enter (13) key
    // is pressed. Here were are pushing the arrow key down (40) and making sure nothing happens

    // down arrow key pressed, nothing should happen
    fireEvent.keyDown(queryByTestId('ChannelLineup-cancel'), { keyCode: 40 })
    await wait(() =>
      expect(queryByTestId('ChannelLineup-cancel')).not.toBeNull()
    )
    // enter key pressed, cancel icon should be hidden
    fireEvent.keyDown(queryByTestId('ChannelLineup-cancel'), { keyCode: 13 })
    await wait(() => expect(queryByTestId('ChannelLineup-cancel')).toBeNull())

    await wait(() => expect(channelFilter).toHaveValue(''))
    fireEvent.change(channelFilter, { target: { value: 'abc' } })
    await wait(() => expect(channelFilter).toHaveValue('abc'))

    fireEvent.click(getByTestId('ChannelLineup-cancel'))

    await wait(() => expect(channelFilter).toHaveValue(''))
  })

  test('test chunkArray function with channel lineup data', async () => {
    const {
      channels: { edges },
    } = CHANNEL_LINEUP_DATA

    const data = chunkArray(edges, 10)

    // There are 14 channels (as of right now in our dummyData)
    expect(edges.length).toEqual(14)

    // There are two chunks of data, so that's how many we expect
    expect(data.length).toEqual(2)
  })
})
