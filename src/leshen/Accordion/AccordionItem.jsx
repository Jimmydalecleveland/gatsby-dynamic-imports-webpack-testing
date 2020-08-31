import React, { useRef } from "react"
import PropTypes from "prop-types"
import { AddCircle, RemoveCircle } from "emotion-icons/material"
import _get from "lodash.get"

import Typography from "../Typography"
import * as Styled from "./Accordion.styles"

const AccordionItem = ({
  item: { title, content },
  index,
  isOpen,
  handleOpen,
}) => {
  const ItemsWrapperRef = useRef()

  const ArrowNavigation = event => {
    if (
      event.type === "keydown" &&
      (event.key === "ArrowUp" || event.key === "ArrowDown")
    ) {
      const direction =
        event.key === "ArrowDown" ? "nextSibling" : "previousSibling"

      const elementToFocus = _get(
        ItemsWrapperRef,
        `current.${direction}.firstChild`
      )

      if (typeof elementToFocus !== "undefined") {
        elementToFocus.focus()
      }
    }
  }

  const handleClick = event => {
    if (
      event.type === "click" ||
      (event.type === "keydown" &&
        (event.key === "Enter" || event.keyCode === 32))
    ) {
      handleOpen(index)
    }

    // Allows users to navigate through the items with up/down arrows
    ArrowNavigation(event)
  }

  return (
    <div ref={ItemsWrapperRef} data-testid={`accordion-item${index}`}>
      <Styled.ItemHeader
        role="button"
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {isOpen ? <RemoveCircle /> : <AddCircle />}
        <Typography variant="feature">{title}</Typography>
      </Styled.ItemHeader>
      <Styled.ItemContent
        isOpen={isOpen}
        data-testid={`accordion-content${index}`}
      >
        {content}
      </Styled.ItemContent>
    </div>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    open: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
}

export default AccordionItem
