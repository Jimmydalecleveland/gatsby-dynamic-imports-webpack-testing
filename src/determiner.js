import React from 'react'

import Alpha from './components/Alpha.js'
import Bravo from './components/Bravo'
import Charlie from './components/Charlie'

export const determineComponent = (componentName) => {
  let Component

  switch (componentName) {
    case 'Alpha':
      Component = Alpha
      break;
    case 'Bravo':
      Component = Bravo
      break;
    case 'Charlie':
      Component = Charlie
      break;
    default:
      return <h2>Not found</h2>
  }

  return <Component />
}