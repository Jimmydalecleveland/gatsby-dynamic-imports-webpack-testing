import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import * as Styled from "./Breadcrumbs.styles"
import { checkDictionary } from "./utils"
import { BREADCRUMB } from "../utils/dataTrackingValues"

const Breadcrumbs = ({
  crumbs,
  path,
  siteURL,
  removeTrailingSlashes,
  ...props
}) => {
  let crumbList = crumbs

  // Creates crumbs based off the page path if non have been provided
  if ((!crumbs || crumbs.length <= 0) && path !== "/") {
    crumbList = path.split("/").map((node, index) => {
      let currentPath =
        index === 0 ? "/" : `${path.substring(0, path.indexOf(node))}${node}`
      const shortName =
        index === 0 ? "Home" : checkDictionary(node.replace(/-/g, " "))
      if (!removeTrailingSlashes && index !== 0) {
        currentPath += "/"
      }
      return { shortName, path: currentPath }
    })
  }

  return (
    crumbList.length > 0 && (
      <Styled.BreadcrumbContainer {...props}>
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context":"https://schema.org",
              "@type": "BreadcrumbList",
                "itemListElement": [
                ${crumbList.map(
                  (crumb, i) =>
                    `
                      {
                        "@type": "ListItem",
                        "position": "${i + 1}",
                        "item": {
                          "@id": "${siteURL}${crumbList[i].path}",
                          "name": "${crumb.shortName}"
                        }
                      }
                    `
                )}
              ]
            }
          `}
          </script>
        </Helmet>
        {crumbList.map(({ shortName, path: crumbPath }, index) =>
          index === crumbList.length - 1 ? (
            <Styled.LastBreadcrumb key={shortName}>
              {shortName}
            </Styled.LastBreadcrumb>
          ) : (
            <Styled.Breadcrumb
              key={shortName}
              to={crumbPath}
              data-tracking={BREADCRUMB.LINK}
            >
              {shortName}
            </Styled.Breadcrumb>
          )
        )}
      </Styled.BreadcrumbContainer>
    )
  )
}

Breadcrumbs.defaultProps = {
  crumbs: [],
  path: "",
  siteURL: "",
  removeTrailingSlashes: false,
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      shortName: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  /** Current URL path. */
  path: PropTypes.string,
  /** Used in JSON-LD Schema.org data. */
  siteURL: PropTypes.string,
  removeTrailingSlashes: PropTypes.bool,
}

export default Breadcrumbs

export const ticketID = "CMS-157"
