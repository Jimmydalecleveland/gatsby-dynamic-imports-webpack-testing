import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './List.styles'

const List = ({ type, children, ...props }) => {
  let listTag = 'ul'
  if (type !== 'unordered') {
    listTag = 'ol'
  }

  return (
    <Styled.List as={listTag} {...props}>
      {children}
    </Styled.List>
  )
}

List.defaultProps = {
  type: 'unordered',
}

List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'unordered']),
  children: PropTypes.node.isRequired,
}

export default List

export const ticketID = 'CMS-168'
