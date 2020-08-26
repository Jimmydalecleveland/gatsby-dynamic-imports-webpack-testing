import React from 'react'
import PropTypes from 'prop-types'
import _get from 'lodash.get'

import Img from '../Image'
import Typography from '../Typography'
import Placeholder from '../Placeholder'
import Breadcrumbs from '../Breadcrumbs'
import * as Styled from './SplitContent.styles'

const SplitContent = ({
  alignImageToBottom,
  reverseForMobile,
  hideImageOnMobile,
  image,
  heading,
  subheading,
  mainContent,
  children,
  breadcrumbProps,
  backgroundColor,
  headingLevel,
  isImageCritical,
  ...props
}) => {
  const imageType = _get(image, 'svg.presentationWidth') ? 'svg' : 'fluid'
  const imageWidth = _get(image, `${imageType}.presentationWidth`)

  // TODO: [LC-314] remove className from root element and use data-attribute
  return (
    <Styled.Section
      hideImageOnMobile={hideImageOnMobile}
      alignImageToBottom={alignImageToBottom}
      imageWidth={imageWidth}
      reverseForMobile={reverseForMobile}
      backgroundColor={backgroundColor}
      {...props}
    >
      {breadcrumbProps && (
        <Breadcrumbs {...breadcrumbProps} backgroundColor={backgroundColor} />
      )}
      <div className="split-content__grid">
        <div className="split-content__image">
          {image && Object.keys(image).length ? (
            <Img data={image} isImageCritical={isImageCritical} />
          ) : (
            <Placeholder type="error">
              <Typography variant="small">Notice</Typography>
              <Typography>
                The content entry of type &quot;SplitContent&quot; is missing
                the Image media asset.
              </Typography>
            </Placeholder>
          )}
        </div>
        <div className="split-content__content">
          <Typography variant={`h${headingLevel}`}>{heading}</Typography>
          {subheading && (
            <Typography
              variant={`h${headingLevel + 3}`}
              rendersAs={`h${headingLevel + 1}`}
            >
              {subheading}
            </Typography>
          )}
          {mainContent}
          {children}
        </div>
      </div>
    </Styled.Section>
  )
}

SplitContent.defaultProps = {
  alignImageToBottom: false,
  hideImageOnMobile: false,
  reverseForMobile: false,
  subheading: null,
  headingLevel: 2,
  image: null,
  mainContent: null,
  children: null,
  backgroundColor: null,
  breadcrumbProps: null,
  isImageCritical: false,
}

SplitContent.propTypes = {
  alignImageToBottom: PropTypes.bool,
  image: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    svg: PropTypes.object,
    context: PropTypes.object,
  }),
  hideImageOnMobile: PropTypes.bool,
  reverseForMobile: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  headingLevel: PropTypes.oneOf([1, 2]),
  mainContent: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  backgroundColor: PropTypes.string,
  breadcrumbProps: PropTypes.shape({
    crumbs: PropTypes.string,
    path: PropTypes.string,
    siteURL: PropTypes.string,
  }),
  isImageCritical: PropTypes.bool,
}

export default SplitContent

export const ticketID = 'CMS-176'
