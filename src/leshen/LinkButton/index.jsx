import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import * as Styled from './LinkButton.styles'

const LinkButton = ({ children, to, ...props }) => (
  <Styled.Link to={to}>
    <Button {...props}>{children}</Button>
  </Styled.Link>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkButton
