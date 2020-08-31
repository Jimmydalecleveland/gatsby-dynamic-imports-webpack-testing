import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import * as Styled from './Button.styles'

const Button = ({
  children,
  variant,
  ghost,
  leftIcon,
  rightIcon,
  color,
  ...props
}) => {
  let textVariant = null

  if (variant === 'small') {
    textVariant = 'small'
  } else if (variant === 'feature') {
    textVariant = 'feature'
  } else if (variant === 'hero') {
    textVariant = 'h5'
  } else if (variant === 'mega') {
    textVariant = 'feature'
  }

  return (
    <Styled.Button
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      color={color}
      ghost={ghost}
      tabIndex="0"
      {...props}
    >
      {leftIcon}
      <Typography
        className="button-text"
        variant={textVariant}
        rendersAs="span"
      >
        {children}
      </Typography>
      {rightIcon}
    </Styled.Button>
  )
}

Button.defaultProps = {
  rounded: 'min',
  shadow: true,
  outlined: false,
  ghost: false,
  type: 'button',
  color: 'primary',
  className: null,
  variant: null,
  leftIcon: null,
  rightIcon: null,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'small', 'feature', 'hero', 'mega']),
  rounded: PropTypes.oneOf(['none', 'min', 'max']),
  shadow: PropTypes.bool,
  outlined: PropTypes.bool,
  /** Uses color for text, and makes background invisible. Hover states still apply original styles. */
  ghost: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'dark', 'light']),
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
}

export default Button

export const ticketID = 'CMS-158'
