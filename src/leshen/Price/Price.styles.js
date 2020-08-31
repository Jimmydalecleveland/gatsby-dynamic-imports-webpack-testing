import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rem } from 'polished'

export const Price = styled.div(
  ({ theme, condensed, large }) => css`
    display: inline-grid;
    grid-template-areas: ${condensed
      ? `
        "prefix prefix prefix"
        "currency dollars change"
        "currency dollars duration"
        "suffix suffix suffix"
      `
      : `
        "prefix prefix prefix prefix"
        "currency dollars change duration"
        "suffix suffix suffix suffix"
      `};
    font-size: ${large
      ? rem(theme.fonts.headings.lg.size[1] * 1.5)
      : rem(theme.fonts.headings.lg.size[1])};
  `
)

export const Prefix = styled.span`
  grid-area: prefix;
  font-size: 1rem;
`

export const Currency = styled.span`
  grid-area: currency;
  font-size: 0.35em;
  line-height: 1;
`

export const DollarAmount = styled.span`
  grid-area: dollars;
  line-height: 0.7;
`

export const ChangeAmount = styled.span(
  ({ condensed }) => css`
    grid-area: change;
    font-size: ${condensed ? '0.35em' : '1em'};
    line-height: 0.7;

    &::before {
      display: ${condensed ? 'none' : 'inline-block'};
      content: '.';
    }
  `
)

export const Duration = styled.span(
  ({ condensed }) => css`
    grid-area: duration;
    font-size: ${condensed ? '0.27em' : '0.4em'};
    line-height: 1;
  `
)

export const Suffix = styled.span`
  grid-area: suffix;
  font-size: 1rem;
`
