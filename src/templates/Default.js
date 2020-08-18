import React from 'react'
import { determineComponent } from '../determiner'

const Default = ({ pageContext: { page } }) => {
  return (
    <main>
      <h1>{page.heading}</h1>
      {page.components && page.components.length > 0 &&
        page.components.map(component => determineComponent(component))}
    </main>
  )
}

export default Default