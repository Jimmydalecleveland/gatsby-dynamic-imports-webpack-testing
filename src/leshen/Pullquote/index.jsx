import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './Pullquote.styles'

import Typography from '../Typography'

const Pullquote = ({ children, cite }) => (
  <Styled.Wrapper>
    <Typography variant="h4" rendersAs="blockquote">
      {children}
    </Typography>
    {cite && (
      <Styled.Cite variant="feature" rendersAs="span">
        {cite}
      </Styled.Cite>
    )}
  </Styled.Wrapper>
)

Pullquote.defaultProps = {
  cite: '',
}

Pullquote.propTypes = {
  children: PropTypes.string.isRequired,
  cite: PropTypes.string,
}

export default Pullquote

export const ticketID = 'CMS-173'
