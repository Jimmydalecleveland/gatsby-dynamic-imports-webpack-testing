import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Typography.styles'

const Typography = ({ children, rendersAs, variant, ...props }) => {
  let Component = Styled.Typography

  if (rendersAs) {
    Component = Styled.Typography.withComponent(rendersAs)
  } else if (/h\d/.test(variant)) {
    Component = Styled.Typography.withComponent(variant)
  }

  return (
    <Component variant={variant} {...props}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  children: null,
  variant: 'body',
  rendersAs: null,
}

Typography.propTypes = {
  children: PropTypes.node,
  rendersAs: PropTypes.string,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'legal',
    'feature',
    'body',
    'small',
  ]),
}

export default Typography

export const ticketID = 'CMS-179'
