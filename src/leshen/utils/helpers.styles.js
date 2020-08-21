import { css } from '@emotion/core'
import { stripUnit } from 'polished'

import { Button } from '../components/Button/Button.styles'
import { Breadcrumb } from '../components/Breadcrumbs/Breadcrumbs.styles'

import fluidRange from './fluidRange'

export const WidthContainer = ({ theme }) => css`
  ${fluidRange('padding-left', [
    stripUnit(theme.spacing.lg),
    stripUnit(theme.spacing.xl),
  ])};
  ${fluidRange('padding-right', [
    stripUnit(theme.spacing.lg),
    stripUnit(theme.spacing.xl),
  ])};

  @media (min-width: ${`${
      stripUnit(theme.breakpoints.xl) + stripUnit(theme.spacing.max)
    }px`}) {
    padding-right: ${`calc((100% - ${theme.breakpoints.xl}) / 2)`};
    padding-left: ${`calc((100% - ${theme.breakpoints.xl}) / 2)`};
  }
`

export const ColorDeterminer = ({ theme, backgroundColor }) => {
  if (!backgroundColor) return false

  const prominentIsObject =
    typeof theme.prominent === 'object' &&
    theme.prominent.constructor === Object

  let { base } = theme.colors.dark
  if (backgroundColor === 'Prominent') {
    // if theme.prominent is an object, use the appropriate lookup shape,
    // if it's a string, look that color up directly, otherwise leave the default.
    if (prominentIsObject) {
      base = theme.colors[theme.prominent.backgroundColor].base
    } else if (typeof theme.prominent === 'string') {
      base = theme.colors[theme.prominent].base
    }
  }

  let ctaColor = theme.colors.primary.base
  if (backgroundColor === 'Prominent') {
    if (prominentIsObject && theme.prominent.action) {
      ctaColor = theme.colors[theme.prominent.action].base
    } else if (base.readable === '#fff') {
      ctaColor = theme.colors.light.base
    } else {
      ctaColor = theme.colors.dark.base
    }
  }

  const primaryColorAdjustment = theme.colors.primary.dark ? 'dark' : 'light'
  let ctaColorHover = theme.colors.primary[primaryColorAdjustment]
  if (backgroundColor === 'Prominent') {
    if (prominentIsObject && theme.prominent.action) {
      const colorAdjustment = theme.colors[theme.prominent.action].dark
        ? 'dark'
        : 'light'
      ctaColorHover = theme.colors[theme.prominent.action][colorAdjustment]
    } else if (base.readable === '#fff') {
      ctaColorHover = theme.colors.light.lighter
    } else {
      ctaColorHover = theme.colors.dark.darker
    }
  }

  const ctaVisited =
    base.readable === '#fff'
      ? theme.colors.light.darker
      : theme.colors.dark.lighter

  return css`
    color: ${base.readable};
    background-color: ${base.hex} !important;

    * {
      color: ${base.readable};
    }

    a {
      &:link,
      &:active {
        color: ${ctaColor.hex};
      }

      &:hover {
        color: ${ctaColorHover.hex};
      }

      &:visited {
        color: ${ctaVisited.hex};
      }
    }

    ${Button} {
      color: ${ctaColor.readable};
      background-color: ${ctaColor.hex};

      * {
        color: inherit !important;
      }

      svg {
        fill: ${ctaColor.readable};
      }

      &:hover {
        background-color: ${ctaColorHover.hex};

        * {
          color: ${ctaColorHover.readable} !important;
        }

        svg {
          fill: ${ctaColorHover.readable};
        }
      }
    }

    ${Breadcrumb} {
      &:link,
      :visited {
        color: ${base.readable};
      }
    }
  `
}
