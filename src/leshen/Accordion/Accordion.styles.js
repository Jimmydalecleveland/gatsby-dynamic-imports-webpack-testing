import styled from '@emotion/styled'
import { rem } from 'polished'

export const ButtonGroup = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary.base.hex};
  font-weight: bold;
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors.light.darker.hex};
    font-weight: normal;
    cursor: not-allowed;
  }
`

export const ItemContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-left: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xxs};
  font-size: ${({ theme }) => rem(theme.fonts.body.sm.size)};

  > p {
    &:first-of-type {
      margin-top: 0;
    }
  }
`

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  cursor: pointer;

  svg {
    margin: 0 ${({ theme }) => theme.spacing.xxs} 0 0;
    color: ${({ theme }) => theme.colors.primary.base.hex};
    flex-shrink: 0;
  }

  &::-webkit-details-marker {
    display: none;
  }
`
