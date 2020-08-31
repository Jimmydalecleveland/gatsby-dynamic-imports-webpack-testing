import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v4"

import Link from "../Link"
import Typography from "../Typography"
import * as Styled from "./Footer.styles"
import { FOOTER } from "../utils/dataTrackingValues"

const Footer = ({ dark, logo, navData, disclaimers }) => (
  <footer>
    {logo && (
      <Styled.TopSection backgroundColor={dark && "Dark"}>
        {logo}
      </Styled.TopSection>
    )}
    {navData && (
      <Styled.BottomSection backgroundColor={dark && "Dark"}>
        {navData.map(({ text, href, subnav }) => (
          <Styled.Nav key={uuid()}>
            <Styled.GroupLabel variant="feature">
              {href ? <Link to={href}>{text}</Link> : text}
            </Styled.GroupLabel>
            {subnav.map(({ href: subNavHref, text: subNavText }) => (
              <Link
                key={uuid()}
                to={subNavHref}
                data-tracking={FOOTER.NAVIGATION_ITEM}
              >
                {subNavText}
              </Link>
            ))}
          </Styled.Nav>
        ))}
      </Styled.BottomSection>
    )}
    {disclaimers && (
      <Styled.LegalSection backgroundColor={dark && "Dark"}>
        {disclaimers.map(disclaimer => (
          <Typography key={uuid()} variant="legal">
            {disclaimer}
          </Typography>
        ))}
      </Styled.LegalSection>
    )}
  </footer>
)

Footer.defaultProps = {
  dark: false,
  logo: null,
  disclaimers: [],
}

Footer.propTypes = {
  dark: PropTypes.bool,
  logo: PropTypes.node,
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      subnav: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  disclaimers: PropTypes.arrayOf(PropTypes.string),
}

export default Footer

export const ticketID = "CMS-162"
