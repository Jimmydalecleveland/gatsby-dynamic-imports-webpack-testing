import React from "react"
import PropTypes from "prop-types"

import * as Styled from "./Header.styles"
import Link from "../Link"
import { HEADER } from "../utils/dataTrackingValues"

const MegaMenu = ({ data, featuredContent }) => (
  <Styled.MegaMenu>
    <div className="subnav">
      <div className="subnav-container">
        <h3>{data.text}</h3>
        <ul>
          {data.subnav.map(subitem =>
            subitem.subnav ? (
              <div key={subitem.text}>
                <h4>
                  <Link
                    to={subitem.href}
                    data-tracking={HEADER.NAVIGATION_ITEM}
                  >
                    {subitem.text}
                  </Link>
                </h4>
                {subitem.subnav.map(item => (
                  <li key={item.text}>
                    <Link to={item.href} data-tracking={HEADER.NAVIGATION_ITEM}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </div>
            ) : (
              <li key={subitem.text}>
                <Link to={subitem.href} data-tracking={HEADER.NAVIGATION_ITEM}>
                  {subitem.text}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {featuredContent && (
        <Styled.FeaturedContent>{featuredContent}</Styled.FeaturedContent>
      )}
    </div>
  </Styled.MegaMenu>
)

MegaMenu.defaultProps = {
  featuredContent: null,
}

MegaMenu.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    subnav: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  featuredContent: PropTypes.node,
}

export default MegaMenu
