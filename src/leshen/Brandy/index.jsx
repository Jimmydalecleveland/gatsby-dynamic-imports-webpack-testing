import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Brandy.styles'

const Brandy = ({ symbol, text, variant }) => (
  <Styled.Brandy
    variant={variant}
    dangerouslySetInnerHTML={{ __html: `${symbol || ''}${text}`.trim() }}
  />
)

Brandy.defaultProps = {
  symbol: '',
  variant: 'legal',
}

Brandy.propTypes = {
  symbol: PropTypes.string,
  text: PropTypes.string.isRequired,
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

export default Brandy
