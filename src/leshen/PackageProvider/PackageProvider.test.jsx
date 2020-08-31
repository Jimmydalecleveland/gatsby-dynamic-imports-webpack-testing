import React from 'react'
import { render } from 'setup-tests'
import PackageProvider from '.'
import { PACKAGE_DATA } from './dummyData'

describe('PackageProvider', () => {
  test('PackageProvider should render', () => {
    const { container } = render(<PackageProvider {...PACKAGE_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
