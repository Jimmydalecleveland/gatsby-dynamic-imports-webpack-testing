import React from 'react'
import PropTypes from 'prop-types'
import { NotificationsActive, Error, Warning } from 'emotion-icons/material'

import * as Styled from './Placeholder.styles'

const Placeholder = ({ type, children }) => {
  let Icon = <NotificationsActive />

  if (type === 'warning') {
    Icon = <Warning />
  } else if (type === 'error') {
    Icon = <Error />
  }

  // TODO: A global config should determine what is "production"
  // TODO: should also log in production to some service
  return process.env.NODE_ENV !== 'production' ? (
    <Styled.Placeholder color={type}>
      <Styled.IconWrapper color={type}>{Icon}</Styled.IconWrapper>
      <Styled.Message>{children}</Styled.Message>
    </Styled.Placeholder>
  ) : null
}

Placeholder.defaultProps = {
  type: 'success',
}

Placeholder.propTypes = {
  type: PropTypes.oneOf(['warning', 'error', 'success']),
  children: PropTypes.node.isRequired,
}

export default Placeholder

export const ticketID = 'CMS-171'
