import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './ElementGroup.styles'

const ElementGroup = ({ children, ...others }) => (
  <Styled.ElementGroup {...others}>{children}</Styled.ElementGroup>
)

ElementGroup.propTypes = {
  /** Allows anything to be passed, but only styles inputs and buttons are supported */
  children: PropTypes.node.isRequired,
}

export default ElementGroup

export const ticketID = 'CMS-161'
