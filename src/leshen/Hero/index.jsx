import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Hero.styles'
import Typography from '../Typography'
import Breadcrumbs from '../Breadcrumbs'

const Hero = ({
  heading,
  subheading,
  mainContent,
  image,
  children,
  headingLevel,
  breadcrumbProps,
  backgroundColor,
  ...props
}) => (
  <Styled.Hero backgroundColor={backgroundColor} {...props}>
    {breadcrumbProps && (
      <Breadcrumbs {...breadcrumbProps} backgroundColor={backgroundColor} />
    )}
    <Styled.Content>
      {heading && (
        <Typography variant={`h${headingLevel}`}>{heading}</Typography>
      )}
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
    {image && <Styled.BackgroundImage data={image} maxWidth="none" />}
  </Styled.Hero>
)

Hero.defaultProps = {
  heading: '',
  subheading: '',
  mainContent: null,
  children: null,
  image: null,
  headingLevel: 2,
  backgroundColor: null,
  breadcrumbProps: null,
}

Hero.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainContent: PropTypes.node,
  children: PropTypes.node,
  image: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    svg: PropTypes.object,
    context: PropTypes.object,
  }),
  backgroundColor: PropTypes.string,
  breadcrumbProps: PropTypes.shape({
    crumbs: PropTypes.string,
    path: PropTypes.string,
    siteURL: PropTypes.string,
  }),
  headingLevel: PropTypes.oneOf([1, 2]),
}

export default Hero

export const ticketID = 'CMS-166'
