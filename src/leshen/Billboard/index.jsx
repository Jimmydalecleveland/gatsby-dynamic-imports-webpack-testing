import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import * as Styled from './Billoard.styles'
import Placeholder from '../Placeholder'
import Breadcrumbs from '../Breadcrumbs'

const Billboard = ({
  image,
  heading,
  subheading,
  mainContent,
  backgroundColor,
  breadcrumbProps,
  variant,
  children,
  headingLevel,
  ...props
}) => (
  <Styled.Section
    data-testid="Billboard-Section"
    backgroundColor={backgroundColor}
    {...props}
  >
    {breadcrumbProps && (
      <Breadcrumbs {...breadcrumbProps} backgroundColor={backgroundColor} />
    )}
    <Styled.Content
      data-testid="Billboard-Content"
      backgroundColor={backgroundColor}
      variant={variant}
    >
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
    </Styled.Content>
    {image ? (
      <Styled.Image data={image} variant={variant} maxWidth="none" />
    ) : (
      <Placeholder type="error">
        <Typography variant="small">Notice</Typography>
        <Typography>
          The content entry of type &quot;Billboard&quot; is missing the Image
          media asset.
        </Typography>
      </Placeholder>
    )}
  </Styled.Section>
)

Billboard.defaultProps = {
  variant: 'split',
  backgroundColor: null,
  subheading: null,
  mainContent: null,
  children: null,
  breadcrumbProps: null,
  headingLevel: 2,
}

Billboard.propTypes = {
  /** Expects the data from ImageSharp for an image */
  image: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    svg: PropTypes.object,
    context: PropTypes.object,
  }).isRequired,
  variant: PropTypes.oneOf(['split', 'full']),
  /** Sets the content background to the themes "primary" color. */
  backgroundColor: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  mainContent: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.objectOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  breadcrumbProps: PropTypes.shape({
    crumbs: PropTypes.string,
    path: PropTypes.string,
    siteURL: PropTypes.string,
  }),
  headingLevel: PropTypes.oneOf([1, 2]),
}

export default Billboard

export const ticketID = 'CMS-156'
