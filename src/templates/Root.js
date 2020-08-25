import React from "react"
import { Link } from "gatsby"

const Root = ({ pageContext: { pageData } }) => {
  return (
    <div>
      {pageData.map(page => (
        <li>
          <Link to={page.slug}>{page.slug}</Link>
        </li>
      ))}
    </div>
  )
}

export default Root
