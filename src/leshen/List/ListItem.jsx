import React from 'react'
import PropTypes from 'prop-types'
import { Lens as Disc } from 'emotion-icons/material'

import * as Styled from './List.styles'

const ListItem = ({ icon, content, children, ...props }) => (
  <Styled.ListItem icon={icon && true} {...props}>
    {icon && icon}
    {content && <div>{content}</div>}
    {children && <div>{children}</div>}
  </Styled.ListItem>
)

ListItem.defaultProps = {
  /**  Disc is the "bullet" icon we default to for consistently using an SVG icon */
  icon: <Disc size="0.5em" style={{ marginTop: '0.45em' }} />,
  content: null,
  children: null,
}

ListItem.propTypes = {
  /** Defaults to a bullet icon (Disc) */
  icon: PropTypes.element,
  // TODO: Should this exist? Why not just pass everything as children?
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default ListItem
