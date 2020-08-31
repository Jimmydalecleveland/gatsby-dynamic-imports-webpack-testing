import React, { useState } from "react"
import PropTypes from "prop-types"
import { ChevronLeft, ChevronRight } from "emotion-icons/material"

import * as Styled from "./Header.styles"
import Link from "../Link"
import Typography from "../Typography"
import { HEADER } from "../utils/dataTrackingValues"

const MobileNav = ({ navData }) => (
  <Styled.MobileNav>
    <List items={navData} />
  </Styled.MobileNav>
)

// A List has ListItems, and ListItems may have Lists in themselves.
const List = ({ parent, items, setSubOpen }) => (
  <div>
    <ul>
      {/* If this List has received a setSubOpen function, it is a child of
          a ListItem and a Back button will be rendered. */}
      {setSubOpen && (
        <button
          data-testid="mobile-menu-back-button"
          data-tracking={HEADER.MOBILE_BACK_BUTTON}
          type="button"
          className="back-button"
          onClick={() => {
            setSubOpen(false)
          }}
        >
          <ChevronLeft />

          <Typography rendersAs="span">Back</Typography>
        </button>
      )}
      <>
        {parent && <ListItem key={parent.text} item={parent} />}
        {items.map(item => (
          <ListItem key={item.text} item={item} />
        ))}
      </>
    </ul>
  </div>
)

// The ListItem component is called from a List and may have a List as a child.
// The ListItem holds the state of whether its child List is open or not, and
// the child List controls when to close itself.
function ListItem({ item }) {
  const [subOpen, setSubOpen] = useState(null)

  return (
    <li>
      {/* If no sub-items belong to this item, we will assume it is a link
          and render it thusly. */}
      {item.subnav ? (
        <button
          data-tracking={HEADER.MOBILE_NAVIGATION_ITEM}
          type="button"
          onClick={() => {
            if (item.subnav) {
              setSubOpen(true)
            }
          }}
        >
          <Typography rendersAs="span">{item.text}</Typography>
          <ChevronRight />
        </button>
      ) : (
        <Link to={item.href} data-tracking={HEADER.MOBILE_NAVIGATION_ITEM}>
          {item.text}
        </Link>
      )}
      {subOpen && (
        <List
          parent={{ text: item.text, href: item.href }}
          items={item.subnav}
          setSubOpen={setSubOpen}
        />
      )}
    </li>
  )
}

MobileNav.propTypes = {
  navData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

List.defaultProps = {
  setSubOpen: null,
  parent: null,
}

List.propTypes = {
  items: PropTypes.arrayOf(
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
  setSubOpen: PropTypes.func,
  parent: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
}

ListItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    subnav: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
      })
    ),
  }).isRequired,
}

export default MobileNav
