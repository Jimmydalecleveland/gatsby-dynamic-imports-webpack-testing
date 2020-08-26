import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './CTABar.styles'

const CTABar = ({ light, children, ...props }) => (
  <Styled.Container light={light} {...props}>
    {children}
  </Styled.Container>
)

CTABar.defaultProps = {
  light: false,
}

CTABar.propTypes = {
  /** Sets the colors to be the light theme, or dark if false */
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default CTABar

export const ticketID = 'CLCMS-203'
