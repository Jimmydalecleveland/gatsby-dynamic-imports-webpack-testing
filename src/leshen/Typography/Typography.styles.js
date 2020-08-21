import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rem } from 'polished'
import fluidRange from '../utils/fluidRange'

export const Typography = styled.p(({ theme, variant }) => {
  const { headings, subheadings, body } = theme.fonts
  let size
  let lineheight
  let weight

  /* eslint-disable prefer-destructuring */
  // The data is the same in each section. They'd need to be renamed if desctructured and this seems excessive
  switch (variant) {
    case 'h1':
      size = headings.lg.size
      lineheight = headings.lg.lineHeight
      weight = headings.lg.weight
      break
    case 'h2':
      size = headings.md.size
      lineheight = headings.md.lineHeight
      weight = headings.md.weight
      break
    case 'h3':
      size = headings.sm.size
      lineheight = headings.sm.lineHeight
      weight = headings.sm.weight
      break
    case 'h4':
      size = subheadings.lg.size
      lineheight = subheadings.lg.lineHeight
      weight = subheadings.lg.weight
      break
    case 'h5':
      size = subheadings.md.size
      lineheight = subheadings.md.lineHeight
      weight = subheadings.md.weight
      break
    case 'h6':
      size = subheadings.sm.size
      lineheight = subheadings.sm.lineHeight
      weight = subheadings.sm.weight
      break
    case 'feature':
      size = body.lg.size
      lineheight = body.lg.lineHeight
      break
    case 'body':
      size = body.md.size
      lineheight = body.md.lineHeight
      break
    case 'small':
      size = body.sm.size
      lineheight = body.sm.lineHeight
      break
    case 'legal':
      size = body.xxs.size
      lineheight = body.xxs.lineHeight
      break
    default: {
      size = body.md.size
      lineheight = body.md.lineHeight
    }
  }

  return css`
    ${weight && `font-weight: ${weight}`};
    ${Array.isArray(size)
      ? fluidRange('font-size', size)
      : `font-size: ${rem(size)}`};
    ${Array.isArray(lineheight)
      ? fluidRange('line-height', lineheight)
      : `line-height: ${rem(lineheight)}`};
    ${variant === 'legal' && `opacity: 0.8`};

    /* IE10+ CSS styles go here */
    /* IE needs this width to prevent text bleed in flex containers */
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 100%;
    }
  `
})
