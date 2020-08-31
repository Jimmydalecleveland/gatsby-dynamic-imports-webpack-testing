import React from 'react'
import { render } from 'setup-tests'
import PackageCard from '.'
import { PACKAGE_DATA } from '../PackageProvider/dummyData'

describe('PackageCard', () => {
  test('PackageCard should render', () => {
    const { container } = render(
      <PackageCard label="Best Value" packageData={PACKAGE_DATA} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render with children if passed', () => {
    const { getByText } = render(
      <PackageCard label="Best Value" packageData={PACKAGE_DATA}>
        Custom Children
      </PackageCard>
    )
    getByText(/custom children/i)
  })
})
