import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './Image.styles'

const Image = ({
  data,
  hasMarginBottom,
  maxWidth,
  isImageCritical,
  ...props
}) => {
  const { fluid, fixed, svg, context } = data

  if (fluid || fixed) {
    let width

    if (maxWidth) {
      width = maxWidth
    } else if (fluid) {
      width = `${fluid.presentationWidth}px`
    } else if (fixed) {
      width = `${fixed.presentationWidth}px`
    }

    return (
      <Styled.Img
        loading={isImageCritical ? 'eager' : 'lazy'}
        fadeIn={!isImageCritical}
        fluid={fluid}
        fixed={fixed}
        hasMarginBottom={hasMarginBottom}
        alt={context && context.custom ? context.custom.alt : ''}
        maxWidth={width}
        {...props}
      />
    )
  }

  if (svg) {
    return (
      <Styled.SVGWrapper
        className="svg-image"
        maxWidth={`${svg.presentationWidth}px`}
        // We know that svg data comes from within the company through a CMS entry
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: svg.code }}
      />
    )
  }

  return null
}

Image.defaultProps = {
  hasMarginBottom: false,
  maxWidth: null,
  isImageCritical: false,
}

Image.propTypes = {
  data: PropTypes.shape({
    context: PropTypes.shape({
      custom: PropTypes.shape({
        alt: PropTypes.string,
        caption: PropTypes.string,
      }),
    }),
    fixed: PropTypes.shape({
      base64: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      presentationWidth: PropTypes.number.isRequired,
    }),
    fluid: PropTypes.shape({
      base64: PropTypes.string.isRequired,
      aspectRatio: PropTypes.number.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      presentationWidth: PropTypes.number.isRequired,
    }),
    svg: PropTypes.shape({
      code: PropTypes.string.isRequired,
      presentationWidth: PropTypes.number.isRequired,
    }),
  }).isRequired,
  hasMarginBottom: PropTypes.bool,
  maxWidth: PropTypes.string,
  isImageCritical: PropTypes.bool,
}

export default Image

export const ticketID = 'CMS-149'
