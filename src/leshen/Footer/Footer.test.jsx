import React from 'react'
import { render } from 'setup-tests'

import Footer from '.'

import { FOOTER_NAV_ITEMS, DISCLAIMERS } from './dummyData'

describe('Footer', () => {
  test('Footer should render', () => {
    const { container } = render(
      <Footer
        logo={<div>I am a logo</div>}
        navData={FOOTER_NAV_ITEMS}
        disclaimers={DISCLAIMERS}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
