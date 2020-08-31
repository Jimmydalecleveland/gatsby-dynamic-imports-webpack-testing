import React from 'react'
import { render, fireEvent } from 'setup-tests'

import Header from '.'
import MobileNav from './MobileNav'
import clearlinkLogo from './logo.svg'

import { HEADER_DATA, HEADER_MEGAMENU_DATA } from './dummyData'

describe('Header', () => {
  test('Header should render', () => {
    const { container } = render(
      <Header
        logo={<div>{clearlinkLogo}</div>}
        topBarNavData={HEADER_DATA.topBarNavItems}
        navData={HEADER_DATA.mainNavItems}
        siteName="Leshen"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('Header with mega menu should render', () => {
    const { container } = render(
      <Header
        logo={clearlinkLogo}
        topBarNavData={HEADER_MEGAMENU_DATA.topBarNavItems}
        navData={HEADER_MEGAMENU_DATA.mainNavItems}
        siteName="Leshen"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('clicking through the MobileNav on mobile works as intended', () => {
    const { container, getAllByTestId, getByText } = render(
      <MobileNav navData={HEADER_MEGAMENU_DATA.mainNavItems} isMobileNavOpen />
    )

    // Click through the nested navigation
    const firstItem = getByText('Internet')
    fireEvent.click(firstItem)

    const secondItem = getByText('High Speed Internet')
    fireEvent.click(secondItem)

    const thirdItem = getByText('What is Internet?')
    fireEvent.click(thirdItem)

    const forthItem = getByText('Best Speeds')
    fireEvent.click(forthItem)

    // Current at the maximum nesting of the nav (level 4)
    // Click the back button
    const backbtn = getAllByTestId(/mobile-menu-back-button/)

    // Ensure the back button took us back one level (level 3)
    fireEvent.click(backbtn[3])
    getByText(/Series of Tubes?/i)

    // Ensure the back button took us back one level (level 2)
    fireEvent.click(backbtn[2])
    getByText(/How Do I Internet/i)

    // Ensure the back button took us back one level (level 1)
    fireEvent.click(backbtn[1])
    getByText(/Vantage Internet?/i)

    // Ensure the back button took us back one level (Main Menu)
    fireEvent.click(backbtn[0])
    getByText(/Phone/i)

    // Going back up through the menu one more time
    const internet = getByText(/Internet/i)
    fireEvent.click(internet)

    const highSpeedInternet = getByText(/High Speed Internet/i)
    fireEvent.click(highSpeedInternet)

    const whatIsInternet = getByText(/What is Internet?/i)
    fireEvent.click(whatIsInternet)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should not render hamburger menu on mobile when no nav items are passed', () => {
    const { queryByText } = render(
      <Header logo={clearlinkLogo} siteName="Leshen" />
    )

    expect(queryByText(/Menu icon Mock/)).toBeNull()
  })
})
