import React, { useState } from "react"
import PropTypes from "prop-types"
import { Menu, Close, LocationOn } from "emotion-icons/material"

import MobileNav from "./MobileNav"
import * as Styled from "./Header.styles"
import Link from "../Link"
import { HEADER } from "../utils/dataTrackingValues"

import RenderNavItems from "./renderNavItems"

const Header = ({
  logo,
  navData,
  topBarNavData,
  dark,
  featuredContent,
  ...props
}) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const getMobileMenuButton = () => {
    if (!navData.length > 0) {
      return null
    }

    if (isMobileNavOpen) {
      return <Close size={32} onClick={() => setMobileNavOpen(false)} />
    }

    return <Menu size={32} onClick={() => setMobileNavOpen(true)} />
  }

  return (
    <>
      <Styled.Header role="banner" dark={dark} {...props}>
        {topBarNavData && (
          <Styled.TopBar>
            <Styled.TopNav>
              {topBarNavData.map(item => (
                <Link
                  key={item.text}
                  to={item.href}
                  data-tracking={HEADER.NAVIGATION_ITEM}
                >
                  {item.text}
                </Link>
              ))}
            </Styled.TopNav>
            <Styled.LocationChanger>
              <LocationOn size="16px" />
              Showing Plans for Salt Lake City
              <Link to="/">Change</Link>
            </Styled.LocationChanger>
          </Styled.TopBar>
        )}
        <Styled.BottomBar>
          <Styled.MainNav role="navigation" dark={dark}>
            {logo}
            {navData.length > 0 && (
              <RenderNavItems
                navData={navData}
                featuredContent={featuredContent}
              />
            )}
          </Styled.MainNav>
          <Styled.PhoneLink
            dark={dark}
            href={`tel:555-555-5555`}
            data-tracking={HEADER.PHONE_LINK}
          >
            Order 555-555-5555
          </Styled.PhoneLink>
        </Styled.BottomBar>
      </Styled.Header>

      <Styled.MobileHeader>
        {logo}
        {getMobileMenuButton()}
      </Styled.MobileHeader>

      {isMobileNavOpen && (
        <MobileNav navData={navData} isMobileNavOpen={isMobileNavOpen} />
      )}
    </>
  )
}

Header.defaultProps = {
  topBarNavData: null,
  featuredContent: null,
  dark: false,
  navData: [],
}

Header.propTypes = {
  logo: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      subnav: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    })
  ),
  topBarNavData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  featuredContent: PropTypes.node,
}

export default Header

export const ticketID = "CMS-165"
