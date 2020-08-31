import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Button from '../Button'

export const ExampleWrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)

export const ExampleAction = ({ children, leftIcon, color, ghost }) => (
  <StyledExampleAction
    variant="feature"
    color={color}
    leftIcon={leftIcon}
    ghost={ghost}
  >
    {children}
  </StyledExampleAction>
)

const StyledExampleAction = styled(Button)`
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    flex-basis: auto;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  max-width: 470px;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`

ExampleAction.defaultProps = {
  ghost: false,
  leftIcon: null,
  color: 'primary',
}

ExampleAction.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  ghost: PropTypes.bool,
  leftIcon: PropTypes.node,
}

ExampleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
