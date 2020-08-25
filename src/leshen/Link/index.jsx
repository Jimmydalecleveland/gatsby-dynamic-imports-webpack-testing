import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

// These should be left outside the component declaration to avoid
// performance losses from creating regex each component call.
const relativeLinkRegex = /^\/(?!\/)/
const telLinkRegex = /^tel:/

const Link = ({ children, to, ...props }) => {
  const isRelativeLink = relativeLinkRegex.test(to)
  if (isRelativeLink) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }

  const isTelLink = telLinkRegex.test(to)

  return (
    <a
      href={to}
      target={isTelLink ? null : '_blank'}
      rel={isTelLink ? null : 'noopener noreferrer'}
      {...props}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  /** URL structure is used to determine internal or external behavior. */
  to: PropTypes.string.isRequired,
  /** Content within the "a" tag. */
  children: PropTypes.node.isRequired,
}

export default Link

export const ticketID = 'CMS-167'
