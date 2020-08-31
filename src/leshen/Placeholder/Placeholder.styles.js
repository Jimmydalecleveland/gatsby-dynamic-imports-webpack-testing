import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Placeholder = styled.div(
  ({ theme, color }) => css`
    background-color: ${theme.colors.light.base.hex};
    border-radius: ${theme.radius};
    border: 1px solid ${theme.colors[color].base.hex};
    box-shadow: ${theme.shadow};
    display: flex;
    align-items: stretch;

    * {
      color: ${theme.colors.dark.base.hex};
    }
  `
)

export const IconWrapper = styled.div(
  ({ theme, color }) => css`
    flex: 0 0 auto;
    background-color: ${theme.colors[color].base.hex};
    padding: ${theme.spacing.md} ${theme.spacing.sm};

    svg {
      fill: ${theme.colors[color].base.readable};
    }
  `
)

export const Message = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.dark.base.hex};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    text-align: left;

    p {
      margin: 0;
    }
  `
)
