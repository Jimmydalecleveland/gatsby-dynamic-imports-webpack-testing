import React, { useState } from "react"
import PropTypes from "prop-types"

import AccordionItem from "./AccordionItem"
import * as Styled from "./Accordion.styles"

/**
 * Accordion creates an accessible interactive group of items that are toggled when clicking on.
 * The `items` prop expects an array of objects. Each object is then converted into
 * an `AccordionItem` component.
 */
const Accordion = ({ items }) => {
  const [openItems, setOpenItems] = useState(Array(items.length).fill(false))
  const numberOpen = openItems.reduce(
    (acc, currItem) => (currItem === true ? acc + 1 : acc),
    0
  )

  const openOrCloseAll = event => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      /* check if open all or close all button called this function through data attributes
       * they are called data-open with boolean values because that is what we want to store
       * in the item array state
       */
      const dataOpen = event.target.dataset.open === "true"
      const newOpenItems = [...openItems].fill(dataOpen)
      setOpenItems(newOpenItems)
    }
  }

  const handleOpen = index => {
    const newOpenItems = [...openItems]
    newOpenItems[index] = !newOpenItems[index]
    setOpenItems(newOpenItems)
  }

  return (
    <div>
      {items.length > 3 && (
        <Styled.ButtonGroup>
          <Styled.Button
            type="button"
            data-open="true"
            onClick={openOrCloseAll}
            onKeyDown={openOrCloseAll}
            disabled={numberOpen === openItems.length}
          >
            Expand All
          </Styled.Button>

          <Styled.Button
            type="button"
            data-open="false"
            onClick={openOrCloseAll}
            onKeyDown={openOrCloseAll}
            disabled={numberOpen === 0}
          >
            Collapse All
          </Styled.Button>
        </Styled.ButtonGroup>
      )}
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          index={index}
          item={item}
          isOpen={openItems[index]}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.string.isRequired,
      ]),
    })
  ).isRequired,
}

export default Accordion

export const ticketID = "CMS-155"
