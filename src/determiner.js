import React from "react"
import CHANNEL_LINEUP_DATA from "./leshen/ChannelLineup/dummyData"

import Bravo from "./components/Bravo"
import Charlie from "./components/Charlie"
import Delta from "./components/Delta.js"
import Echo from "./components/Echo"
import Foxtrot from "./components/Foxtrot"
import Button from "./leshen/Button"
import Typography from "./leshen/Typography"
import Accordion from "./leshen/Accordion/AccordionDemo"
import ChannelLineup from "./leshen/ChannelLineup"

export const determineComponent = ({ id, name, children }) => {
  let Component

  switch (name) {
    case "Alpha":
      Component = Alpha
      break
    case "Bravo":
      Component = Bravo
      break
    case "Charlie":
      Component = Charlie
      break
    case "Delta":
      Component = Delta
      break
    case "Echo":
      Component = Echo
      break
    case "Foxtrot":
      Component = Foxtrot
      break
    case "Button":
      Component = Button
      break
    case "Typography":
      Component = Typography
      break
    case "Accordion":
      Component = Accordion
      break
    case "Channel Lineup":
      return <ChannelLineup data={CHANNEL_LINEUP_DATA} />
    default:
      return <h2>Not found</h2>
  }

  return <Component key={id}>{children}</Component>
}
