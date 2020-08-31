import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Section.styles'

const Section = ({ children, ...props }) => (
  <Styled.Section {...props}>{children}</Styled.Section>
)

Section.defaultProps = {
  children: null,
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Section

export const ticketID = 'CMS-174'
