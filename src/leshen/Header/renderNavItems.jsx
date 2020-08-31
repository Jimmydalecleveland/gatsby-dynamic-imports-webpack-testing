import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v4"

import { KeyboardArrowDown } from "emotion-icons/material"
import MegaMenu from "./MegaMenu"
import Link from "../Link"
import { HEADER } from "../utils/dataTrackingValues"

const RenderNavItems = ({ navData, featuredContent }) => {
  // Determine whether the top level nav item is a link and if it has a down arrow
  const linkDeterminer = item => {
    if (item.subnav && item.href) {
      return (
        <Link to={item.href} data-tracking={HEADER.NAVIGATION_ITEM}>
          <span>{item.text}</span> <KeyboardArrowDown size={18} />
        </Link>
      )
    }

    if (item.href)
      return (
        <Link to={item.href} data-tracking={HEADER.NAVIGATION_ITEM}>
          <span>{item.text}</span>
        </Link>
      )

    return <span>{item.text}</span>
  }

  // Determine if the menu item has a megamenu or a regular subnav
  const megaMenuDeterminer = item => {
    if (item.megaMenu && item.subnav)
      return <MegaMenu data={item} featuredContent={featuredContent} />
    if (item.subnav)
      return (
        <ul className="subnav">
          {item.subnav.map(subitem => (
            <li key={uuid()}>
              <Link to={subitem.href} data-tracking={HEADER.NAVIGATION_ITEM}>
                {subitem.text}
              </Link>
            </li>
          ))}
        </ul>
      )
    return null
  }

  return (
    <>
      {navData.map(item => (
        <span key={item.text} className="primary-link">
          {linkDeterminer(item)}
          {megaMenuDeterminer(item)}
        </span>
      ))}
    </>
  )
}

RenderNavItems.defaultProps = {
  featuredContent: null,
}

RenderNavItems.propTypes = {
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
  ).isRequired,
  featuredContent: PropTypes.node,
}

export default RenderNavItems
