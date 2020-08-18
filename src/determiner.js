import React from 'react'
import loadable from '@loadable/component'

const Alpha = loadable(() => import('./components/Alpha.js'))
const Bravo = loadable(() => import('./components/Bravo'))
const Charlie = loadable(() => import('./components/Charlie'))

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