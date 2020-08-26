import React from 'react'
import PropTypes from 'prop-types'

import { Phone, Done } from 'emotion-icons/material'
import styled from '@emotion/styled'
import StickyBar from './StickyBar'
import Button from '../Button'
import Link from '../Link'
import { useMapi } from '../../context/mapi'

const StandardImplementation = () => {
  const { rotatedNumber } = useMapi()

  return (
    <StickyBar showOriginal>
      <StyledWrapper>
        <StyledLink style={{ marginRight: '5vw' }} to={`tel:${rotatedNumber}`}>
          <StyledBarButton
            variant="hero"
            color="light"
            leftIcon={<Phone />}
            ghost
          >
            Call: {rotatedNumber}
          </StyledBarButton>
        </StyledLink>

        <StyledLink to="/availability" style={{ marginLeft: '5vw' }}>
          <StyledBarButton
            variant="hero"
            color="light"
            leftIcon={<Done />}
            ghost
          >
            Check Availability
          </StyledBarButton>
        </StyledLink>
      </StyledWrapper>
    </StickyBar>
  )
}

export default StandardImplementation

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

const StyledBarButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xxs}`};

    .button-text {
      font-size: ${({ theme }) => theme.fonts.body.sm.size}px;
      font-weight: normal;
      margin: 0;
    }
  }
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`

StyledWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
