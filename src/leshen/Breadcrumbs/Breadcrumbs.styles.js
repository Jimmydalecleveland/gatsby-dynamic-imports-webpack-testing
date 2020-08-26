import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Link from '../Link'

export const Breadcrumb = styled(Link)(
  ({ theme }) => css`
    padding-left: ${theme.spacing.xxs};
    text-decoration: none;

    &:link,
    :visited {
      color: ${theme.colors.dark.base.hex};
    }

    &:hover {
      text-decoration: none;
    }

    &::after {
      padding-left: ${theme.spacing.xxs};
      content: '/';
    }
  `
)

export const BreadcrumbContainer = styled.div(
  ({ theme }) =>
    css`
      top: ${theme.spacing.sm};
      position: absolute;
      z-index: 1;
      display: flex;
      font-size: ${theme.fonts.body.xs.size}px;
      text-transform: uppercase;

      @media (max-width: ${theme.breakpoints.sm}) {
        margin-top: -${theme.spacing.lg};
        position: relative;
        padding-bottom: ${theme.spacing.lg};
      }
    `
)

export const LastBreadcrumb = styled.p`
  font-size: ${({ theme }) => theme.fonts.body.xs.size}px;
  padding-left: ${({ theme }) => theme.spacing.xxs};
  line-height: unset;
  margin-top: 0;
  margin-bottom: 0;
  opacity: 0.6;
`
