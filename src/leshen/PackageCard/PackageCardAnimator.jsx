import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './PackageCard.styles'

const PackageCardAnimator = ({ children }) => (
  <Styled.Animator>{children}</Styled.Animator>
)

PackageCardAnimator.propTypes = {
  children: PropTypes.node.isRequired,
}
