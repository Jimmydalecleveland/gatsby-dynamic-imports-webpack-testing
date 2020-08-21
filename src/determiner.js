import React from 'react'
import loadable from '@loadable/component'

const Alpha = loadable(() => import('./components/Alpha.js'))
const Bravo = loadable(() => import('./components/Bravo'))
const Charlie = loadable(() => import('./components/Charlie'))
const Delta = loadable(() => import('./components/Delta.js'))
const Echo = loadable(() => import('./components/Echo'))
const Foxtrot = loadable(() => import('./components/Foxtrot'))
const Button = loadable(() => import('./leshen/Button'))
const Typography = loadable(() => import('./leshen/Typography'))

export const determineComponent = ({ id, name, children }) => {
  let Component

  switch (name) {
    case 'Alpha':
      Component = Alpha
      break;
    case 'Bravo':
      Component = Bravo
      break;
    case 'Charlie':
      Component = Charlie
      break;
    case 'Delta':
      Component = Delta
      break;
    case 'Echo':
      Component = Echo
      break;
    case 'Foxtrot':
      Component = Foxtrot
      break;
    case 'Button':
      Component = Button
      break;
    case 'Typography':
      Component = Typography
      break;
    default:
      return <h2>Not found</h2>
  }

  return <Component key={id}>{children}</Component>
}