import React from 'react'
import { render } from 'setup-tests'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import ElementGroup from '.'
import Button from '../Button'

/* This is some voodoo to get rid of the console.error from emotion:
 * `The pseudo class ":first-child" is potentially unsafe when doing server-side rendering`
 * We actually need to use :first-child (or haven't figured out a way around it) so we'll ignore this for now
 */
const emotionCache = createCache()
emotionCache.compat = true

describe('Link', () => {
  test('Link should render', () => {
    const { container } = render(
      <CacheProvider value={emotionCache}>
        <ElementGroup>
          <input type="text" placeholder="Input" />
          <Button>Search</Button>
        </ElementGroup>
      </CacheProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
