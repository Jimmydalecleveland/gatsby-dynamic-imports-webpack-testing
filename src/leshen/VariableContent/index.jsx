import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './VariableContent.styles'
import Section from '../Section'
import Img from '../Image'
import Typography from '../Typography'
import Breadcrumbs from '../Breadcrumbs'

const VariableContent = ({
  heading,
  subheading,
  headingLevel,
  mainContent,
  image,
  children,
  alignImageToBottom,
  centeredContent,
  breadcrumbProps,
  backgroundColor,
  isImageCritical,
  ...props
}) => (
  <Section backgroundColor={backgroundColor} {...props}>
    {breadcrumbProps && (
      <Breadcrumbs {...breadcrumbProps} backgroundColor={backgroundColor} />
    )}
    <Styled.Intro
      hasChildren={Boolean(children && heading)}
      centeredContent={centeredContent}
    >
      {image && !alignImageToBottom && (
        <Img data={image} isImageCritical={isImageCritical} />
      )}
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
      <Styled.Content centeredContent={centeredContent}>
        {mainContent}
      </Styled.Content>
      {image && alignImageToBottom && (
        <Img data={image} isImageCritical={isImageCritical} />
      )}
    </Styled.Intro>
    {children}
  </Section>
)

VariableContent.defaultProps = {
  subheading: '',
  headingLevel: 2,
  mainContent: null,
  children: null,
  image: null,
  alignImageToBottom: false,
  centeredContent: false,
  backgroundColor: null,
  breadcrumbProps: null,
  isImageCritical: false,
}

VariableContent.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  headingLevel: PropTypes.oneOf([1, 2]),
  image: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
    svg: PropTypes.object,
    context: PropTypes.object,
  }),
  alignImageToBottom: PropTypes.bool,
  centeredContent: PropTypes.bool,
  mainContent: PropTypes.node,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  breadcrumbProps: PropTypes.shape({
    crumbs: PropTypes.string,
    path: PropTypes.string,
    siteURL: PropTypes.string,
  }),
  isImageCritical: PropTypes.bool,
}

export default VariableContent

export const ticketID = 'CMS-180'
