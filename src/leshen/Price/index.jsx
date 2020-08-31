import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Price.styles'

const Price = ({
  large,
  prefix,
  amount,
  duration,
  suffix,
  children,
  condensed,
  ...props
}) => (
  <>
    <Styled.Price
      condensed={condensed}
      large={large}
      aria-label={`${prefix || ''} $${amount} per ${duration}`}
      {...props}
    >
      {prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
      <Styled.Currency>$</Styled.Currency>
      <Styled.DollarAmount condensed={condensed}>
        {amount.split('.')[0]}
      </Styled.DollarAmount>
      <Styled.ChangeAmount condensed={condensed}>
        {amount.split('.')[1] || '00'}
      </Styled.ChangeAmount>
      <Styled.Duration condensed={condensed}>{duration}</Styled.Duration>
      {suffix && <Styled.Suffix>{suffix}</Styled.Suffix>}
    </Styled.Price>
    {children && children}
  </>
)

Price.defaultProps = {
  large: false,
  condensed: false,
  prefix: null,
  currency: '$',
  duration: '/mo',
  suffix: null,
  children: null,
}

Price.propTypes = {
  /** Used for prominent pricing, e.g. in the Hero. */
  large: PropTypes.bool,
  condensed: PropTypes.bool,
  prefix: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string.isRequired,
  duration: PropTypes.string,
  suffix: PropTypes.string,
  /** Commonly used for disclaimers. */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Price

export const ticketID = 'CMS-172'
