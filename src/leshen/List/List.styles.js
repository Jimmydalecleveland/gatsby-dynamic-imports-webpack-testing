import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const List = styled.ul(
  ({ as }) => css`
    display: inline-block;
    text-align: left; /* for centered lists */
    list-style: none;

    ${as === 'ol' &&
    `
      counter-reset: number-list-style;

      > li {
        counter-increment: number-list-style;
        &:before {
          content: counter(number-list-style)'.';
        }

        svg {
          display: none;
        }
      }
    `}
  `
)
export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: ${({ theme }) => theme.spacing.xxs};
    flex: 1;
  }

  > svg {
    margin: 0;
  }

  h5 {
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
`
