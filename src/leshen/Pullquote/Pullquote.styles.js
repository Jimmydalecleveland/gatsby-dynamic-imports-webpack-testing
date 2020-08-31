import styled from '@emotion/styled'
import Typography from '../Typography'

export const Wrapper = styled.div`
  margin: ${({ theme }) =>
    `${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.md}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) =>
      `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.md}`};
  }
`

export const Cite = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    margin-right: ${({ theme }) => theme.spacing.xs};
    content: '';
    border-bottom: solid 1px;
    width: 20px;
  }

  &::after {
    margin-left: ${({ theme }) => theme.spacing.xs};
    margin-right: 0;
  }
`
